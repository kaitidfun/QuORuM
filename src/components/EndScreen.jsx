import { useLanguage } from '../i18n/LanguageContext'
import ConclusionEndScreen from './ConclusionEndScreen'

function EndScreen({ result, day, onRestart }) {
  const { t } = useLanguage()
  const copy = t.gameOver[result.cause]

  if (copy.pages) {
    return <ConclusionEndScreen copy={copy} day={day} onRestart={onRestart} />
  }

  return (
    <div className="screen">
      <p className="eyebrow">{t.ui.termEnded(day)}</p>
      <h1 className="title title--small">{copy.title}</h1>
      <p className="lede">{copy.message}</p>
      <button type="button" className="primary-btn" onClick={onRestart}>
        {t.ui.nextChairperson}
      </button>
    </div>
  )
}

export default EndScreen
