export const METER_KEYS = ['morale', 'supplies', 'order', 'snowblind']

export function createInitialMeters() {
  return { morale: 60, supplies: 70, order: 50, snowblind: 0 }
}

function clamp(n) {
  return Math.max(0, Math.min(100, n))
}

export function applyEffects(meters, effects = {}) {
  const next = { ...meters }
  for (const key of METER_KEYS) {
    if (effects[key]) next[key] = clamp(next[key] + effects[key])
  }
  return next
}

export function passiveTick(meters, turn) {
  const next = { ...meters }
  // Tuned for a 60-90 day run: draining fast enough to matter, slow enough
  // that reaching the true ending is realistic with reasonable play.
  if (turn % 2 === 0) next.supplies = clamp(next.supplies - 1)
  const drift = Math.min(0.75, 0.08 + turn * 0.006)
  next.snowblind = clamp(next.snowblind + drift * (0.7 + Math.random() * 0.6))
  return next
}

export function checkGameOver(meters) {
  if (meters.morale <= 0) return { cause: 'mutiny' }
  if (meters.supplies <= 0) return { cause: 'starvation' }
  if (meters.order <= 0) return { cause: 'anarchy' }
  if (meters.order >= 100) return { cause: 'tyranny' }
  if (meters.snowblind >= 100) return { cause: 'snowblind' }
  return null
}

export const ENDING_MIN_DAY = 60
export const ENDING_MAX_DAY = 90
export const ENDING_LORE_THRESHOLD = 70

// The story's true ending: reachable any time between day 60 and day 90
// depending on how fast the player's choices fed the Himmavatan rumor
// (the hidden `lore` counter), and forced outright at day 90 either way.
export function checkEnding(day, lore, meters) {
  const forced = day >= ENDING_MAX_DAY
  const ready = day >= ENDING_MIN_DAY && lore >= ENDING_LORE_THRESHOLD
  if (!forced && !ready) return null
  const cause = meters.snowblind >= 55 ? 'conclusion-embraced' : 'conclusion-holdout'
  return { cause }
}

function isEligible(card, state) {
  if (card.minTurn && state.turn < card.minTurn) return false
  if (card.maxTurn && state.turn > card.maxTurn) return false
  if (card.minRuns && state.totalRuns < card.minRuns) return false
  if (card.requires && !card.requires(state)) return false
  if (state.recentIds.includes(card.id)) return false
  return true
}

function weightFor(card, state) {
  let w = card.weight ?? 1
  // Layer 2 grows more common over time, but capped so it never swamps the
  // pool late-game purely by volume (with 100+ layer-2 cards now in the
  // deck, an uncapped multiplier made snowblind pressure spiral by turn 60).
  if (card.layer === 2) w *= Math.min(2, 1 + state.turn / 30)
  const seenCount = state.cardSeenCounts?.[card.id] || 0
  if (seenCount > 0) w *= 1 / (1 + 0.4 * seenCount)
  return w
}

// Returns { card, nextQueue }. A card queued by an earlier choice
// (via queueCard) takes priority over the normal weighted draw, so
// choices can guarantee a specific follow-up a few turns later.
export function pickCard(cards, state) {
  const queue = state.queue || []
  const dueIndex = queue.findIndex((q) => q.dueTurn <= state.turn)
  if (dueIndex !== -1) {
    const due = queue[dueIndex]
    const forcedCard = cards.find((c) => c.id === due.id)
    if (forcedCard) {
      return { card: forcedCard, nextQueue: queue.filter((_, i) => i !== dueIndex) }
    }
  }

  let pool = cards.filter((c) => isEligible(c, state))
  if (pool.length === 0) pool = cards.filter((c) => !state.recentIds.includes(c.id))
  if (pool.length === 0) pool = cards

  const totalWeight = pool.reduce((sum, c) => sum + weightFor(c, state), 0)
  let roll = Math.random() * totalWeight
  let chosen = pool[pool.length - 1]
  for (const card of pool) {
    roll -= weightFor(card, state)
    if (roll <= 0) {
      chosen = card
      break
    }
  }
  return { card: chosen, nextQueue: queue }
}

export const RECENT_HISTORY_SIZE = 8
