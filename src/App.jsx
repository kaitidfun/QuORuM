import { useState } from 'react'
import { cards } from './game/cards'
import {
  createInitialMeters,
  applyEffects,
  passiveTick,
  checkGameOver,
  checkEnding,
  pickCard,
  RECENT_HISTORY_SIZE,
} from './game/engine'
import { loadSave, recordRunEnd } from './game/save'
import { checkNewLogEntries } from './game/log'
import MeterBar from './components/MeterBar'
import GameCard from './components/GameCard'
import StartScreen from './components/StartScreen'
import IntroScreen from './components/IntroScreen'
import EndScreen from './components/EndScreen'
import LanguageToggle from './components/LanguageToggle'
import CodexBar from './components/CodexBar'
import CodexModal from './components/CodexModal'
import Scene3D from './scene/Scene3D'
import { useLanguage } from './i18n/LanguageContext'
import './App.css'

const MILESTONE_DAY = 30

function newRunState(save) {
  const meters = createInitialMeters()
  const pickState = {
    turn: 1,
    recentIds: [],
    totalRuns: save.totalRuns,
    meters,
    flags: {},
    queue: [],
    cardSeenCounts: save.cardSeenCounts,
  }
  const { card } = pickCard(cards, pickState)
  return {
    phase: 'playing',
    meters,
    day: 1,
    flags: {},
    lore: 0,
    queue: [],
    current: card,
    swapped: Math.random() < 0.5,
    recentIds: [],
    seenIds: [card.id],
    milestoneShown: false,
    milestoneVisible: false,
    logUnlocked: [],
    logHasUnread: false,
    // Per-run, like the log: resets every new term, so the "!" badge fires
    // again the first time a term's own cards mention Stages/Camp Layout,
    // even if an earlier term already covered the same ground.
    codexSeen: card.jargon ? { [card.jargon]: true } : {},
    codexRead: {},
  }
}

function endRun(game, save, setSave, setGame, result, day, meters, flags) {
  const updatedSave = recordRunEnd({ cause: result.cause, turn: day, flags, seenIds: game.seenIds })
  setSave(updatedSave)
  setGame({ ...game, phase: 'ended', meters, day, flags, result })
}

function App() {
  const { t } = useLanguage()
  const [save, setSave] = useState(loadSave)
  const [game, setGame] = useState(null)
  const [showIntro, setShowIntro] = useState(false)
  const [codexOpen, setCodexOpen] = useState(null)

  function handleTakeChair() {
    setShowIntro(true)
  }

  function handleBeginTerm() {
    setShowIntro(false)
    setGame(newRunState(save))
  }

  function handleOpenCodex(category) {
    if (category === 'log') {
      setGame((g) => (g ? { ...g, logHasUnread: false } : g))
    } else {
      setGame((g) => (g ? { ...g, codexRead: { ...g.codexRead, [category]: true } } : g))
    }
    setCodexOpen(category)
  }

  function handleChoose(side) {
    if (!game || game.milestoneVisible) return
    const choice = game.current[side]
    let meters = applyEffects(game.meters, choice.effects, game.day)
    const nextFlags = choice.setFlag ? { ...game.flags, [choice.setFlag]: true } : game.flags
    const lore = game.lore + (choice.loreEffect || 0)
    const queue = choice.queueCard
      ? [...game.queue, { id: choice.queueCard.id, dueTurn: game.day + (choice.queueCard.delay ?? 1) }]
      : game.queue

    const over = checkGameOver(meters)
    if (over) {
      endRun(game, save, setSave, setGame, over, game.day, meters, nextFlags)
      return
    }

    const day = game.day + 1
    meters = passiveTick(meters, day)
    const overAfterTick = checkGameOver(meters)
    if (overAfterTick) {
      endRun(game, save, setSave, setGame, overAfterTick, day, meters, nextFlags)
      return
    }

    const ending = checkEnding(day, lore, meters)
    if (ending) {
      endRun(game, save, setSave, setGame, ending, day, meters, nextFlags)
      return
    }

    const recentIds = [...game.recentIds, game.current.id].slice(-RECENT_HISTORY_SIZE)
    const pickState = {
      turn: day,
      recentIds,
      totalRuns: save.totalRuns,
      meters,
      flags: nextFlags,
      queue,
      cardSeenCounts: save.cardSeenCounts,
    }
    const { card: nextCard, nextQueue } = pickCard(cards, pickState)
    const seenIds = [...game.seenIds, nextCard.id]
    const codexSeen =
      nextCard.jargon && !game.codexSeen[nextCard.jargon]
        ? { ...game.codexSeen, [nextCard.jargon]: true }
        : game.codexSeen

    const hitMilestone = day === MILESTONE_DAY && !game.milestoneShown

    const newLogIds = checkNewLogEntries({ day, meters, lore, flags: nextFlags }, game.logUnlocked)
    const logUnlocked = newLogIds.length ? [...game.logUnlocked, ...newLogIds] : game.logUnlocked
    const logHasUnread = game.logHasUnread || newLogIds.length > 0

    setGame({
      ...game,
      meters,
      day,
      flags: nextFlags,
      lore,
      queue: nextQueue,
      recentIds,
      seenIds,
      current: nextCard,
      swapped: Math.random() < 0.5,
      milestoneShown: game.milestoneShown || hitMilestone,
      milestoneVisible: hitMilestone,
      logUnlocked,
      logHasUnread,
      codexSeen,
    })
  }

  function dismissMilestone() {
    setGame((g) => ({ ...g, milestoneVisible: false }))
  }

  function handleRestart() {
    setGame(null)
  }

  let content
  if (showIntro) {
    content = <IntroScreen onBegin={handleBeginTerm} />
  } else if (!game) {
    content = <StartScreen save={save} onBegin={handleTakeChair} />
  } else if (game.phase === 'ended') {
    content = <EndScreen result={game.result} day={game.day} onRestart={handleRestart} />
  } else {
    content = (
      <>
        <header className="meters">
          <MeterBar label={t.ui.meters.morale} value={game.meters.morale} tone="morale" />
          <MeterBar label={t.ui.meters.supplies} value={game.meters.supplies} tone="supplies" />
          <MeterBar label={t.ui.meters.order} value={game.meters.order} tone="order" />
          <MeterBar label={t.ui.meters.snowblind} value={game.meters.snowblind} tone="snowblind" />
        </header>

        <GameCard card={game.current} day={game.day} onChoose={handleChoose} swapped={game.swapped} />

        <CodexBar
          onOpen={handleOpenCodex}
          highlight={game.current.jargon}
          unread={{
            stages: !!game.codexSeen.stages && !game.codexRead.stages,
            units: !!game.codexSeen.units && !game.codexRead.units,
            log: game.logHasUnread,
          }}
        />

        {game.milestoneVisible && (
          <div className="milestone-overlay">
            <div className="milestone-box">
              <p className="eyebrow">{t.ui.dayLabel(MILESTONE_DAY)}</p>
              <h2>{t.ui.milestoneTitle}</h2>
              <p>{t.ui.milestoneBody}</p>
              <button type="button" className="primary-btn" onClick={dismissMilestone}>
                {t.ui.continue}
              </button>
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <>
      <Scene3D />
      <main className="app">
        <span className="brand">QuORuM</span>
        <LanguageToggle />
        {content}
      </main>

      {codexOpen && (
        <CodexModal
          title={
            codexOpen === 'stages'
              ? t.codex.stagesLabel
              : codexOpen === 'units'
                ? t.codex.unitsLabel
                : t.codex.logLabel
          }
          pages={
            codexOpen === 'stages'
              ? t.codex.stagesPages
              : codexOpen === 'units'
                ? t.codex.unitsPages
                : game?.logUnlocked?.length
                  ? game.logUnlocked.map((id) => t.codex.logEntries[id])
                  : [{ title: t.codex.logEmptyTitle, body: t.codex.logEmptyBody }]
          }
          onClose={() => setCodexOpen(null)}
        />
      )}
    </>
  )
}

export default App
