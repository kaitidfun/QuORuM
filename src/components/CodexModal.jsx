import { useState } from 'react'

function CodexModal({ title, pages, onClose }) {
  const [step, setStep] = useState(0)
  const page = pages[step]
  const paragraphs = page.body.split('\n\n')
  const isFirst = step === 0
  const isLast = step === pages.length - 1

  return (
    <div className="codex-overlay" onClick={onClose}>
      <div className="codex-box" onClick={(e) => e.stopPropagation()}>
        <div className="codex-header">
          <span className="codex-eyebrow">{title}</span>
          <button type="button" className="codex-close" onClick={onClose} aria-label="Close">
            &#10005;
          </button>
        </div>

        <div className="codex-text">
          <h2>{page.title}</h2>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="codex-footer">
          <button
            type="button"
            className="codex-nav"
            onClick={() => setStep((s) => s - 1)}
            disabled={isFirst}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <div className="intro-dots">
            {pages.map((_, i) => (
              <span key={i} className={`intro-dot ${i === step ? 'intro-dot--active' : ''}`} />
            ))}
          </div>
          <button
            type="button"
            className="codex-nav"
            onClick={() => setStep((s) => s + 1)}
            disabled={isLast}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  )
}

export default CodexModal
