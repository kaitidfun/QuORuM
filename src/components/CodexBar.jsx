import { useLanguage } from '../i18n/LanguageContext'

function SnowflakeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M12 2v20M4 7l16 10M20 7L4 17" />
    </svg>
  )
}

function LayoutIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7.5" height="7.5" rx="1" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1" />
    </svg>
  )
}

function CodexBar({ onOpen, highlight, unread }) {
  const { t } = useLanguage()

  return (
    <div className="codex-bar">
      <button
        type="button"
        className={`codex-btn ${highlight === 'stages' ? 'codex-btn--pulse' : ''} ${unread?.stages ? 'codex-btn--unread' : ''}`}
        onClick={() => onOpen('stages')}
        aria-label={t.codex.stagesLabel}
        title={t.codex.stagesLabel}
      >
        <SnowflakeIcon />
        {unread?.stages && <span className="codex-badge" aria-hidden="true">!</span>}
      </button>
      <button
        type="button"
        className={`codex-btn ${highlight === 'units' ? 'codex-btn--pulse' : ''} ${unread?.units ? 'codex-btn--unread' : ''}`}
        onClick={() => onOpen('units')}
        aria-label={t.codex.unitsLabel}
        title={t.codex.unitsLabel}
      >
        <LayoutIcon />
        {unread?.units && <span className="codex-badge" aria-hidden="true">!</span>}
      </button>
    </div>
  )
}

export default CodexBar
