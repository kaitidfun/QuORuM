import { useLanguage } from '../i18n/LanguageContext'

function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  function toggle() {
    setLang(lang === 'en' ? 'th' : 'en')
  }

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggle}
      aria-label="Switch language"
    >
      <span className={`lang-thumb ${lang === 'th' ? 'lang-thumb--right' : ''}`} />
      <span className={`lang-opt ${lang === 'en' ? 'lang-opt--active' : ''}`}>EN</span>
      <span className={`lang-opt ${lang === 'th' ? 'lang-opt--active' : ''}`}>ไทย</span>
    </button>
  )
}

export default LanguageToggle
