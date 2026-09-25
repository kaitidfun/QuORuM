import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

function IntroScreen({ onBegin }) {
  const { t } = useLanguage()
  const pages = t.intro.pages
  const [step, setStep] = useState(0)
  const isLast = step === pages.length - 1
  const paragraphs = pages[step].split('\n\n')

  function handleNext() {
    if (isLast) onBegin()
    else setStep((s) => s + 1)
  }

  return (
    <div className="intro-screen">
      <div className="intro-text">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="intro-footer">
        <div className="intro-dots">
          {pages.map((_, i) => (
            <span key={i} className={`intro-dot ${i === step ? 'intro-dot--active' : ''}`} />
          ))}
        </div>
        <button type="button" className="primary-btn" onClick={handleNext}>
          {isLast ? t.ui.beginTerm : t.ui.next}
        </button>
      </div>
    </div>
  )
}

export default IntroScreen
