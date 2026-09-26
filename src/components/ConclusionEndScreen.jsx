import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

// The two "term ended naturally" endings get a paged, first-person send-off
// mirroring IntroScreen's opening monologue, instead of the one-line verdict
// card the five mid-term failure endings still use.
function ConclusionEndScreen({ copy, day, onRestart }) {
  const { t } = useLanguage()
  const [step, setStep] = useState(0)
  const isLast = step === copy.pages.length - 1
  const paragraphs = copy.pages[step].split('\n\n')

  function handleNext() {
    if (isLast) onRestart()
    else setStep((s) => s + 1)
  }

  return (
    <div className="intro-screen">
      <p className="eyebrow">{t.ui.termEnded(day)}</p>
      {isLast && <h1 className="title title--small">{copy.title}</h1>}

      <div className="intro-text">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="intro-footer">
        <div className="intro-dots">
          {copy.pages.map((_, i) => (
            <span key={i} className={`intro-dot ${i === step ? 'intro-dot--active' : ''}`} />
          ))}
        </div>
        <button type="button" className="primary-btn" onClick={handleNext}>
          {isLast ? t.ui.nextChairperson : t.ui.next}
        </button>
      </div>
    </div>
  )
}

export default ConclusionEndScreen
