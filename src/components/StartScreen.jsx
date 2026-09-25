import { useLanguage } from '../i18n/LanguageContext'

function StartScreen({ save, onBegin }) {
  const { t } = useLanguage()
  const flavorEntries = Object.keys(save.legacyFlags || {})
  const flavorKey = flavorEntries.length ? flavorEntries[flavorEntries.length - 1] : null
  const flavor = flavorKey ? t.legacyFlavors[flavorKey] : null

  return (
    <div className="screen">
      <p className="eyebrow">{t.ui.eyebrowStart}</p>
      <h1 className="title">{t.ui.title}</h1>
      <p className="lede">{t.ui.lede}</p>

      {save.totalRuns > 0 && (
        <div className="legacy-box">
          <p>{t.ui.legacyChairperson(save.totalRuns + 1, save.totalRuns)}</p>
          {flavor && <p className="legacy-flavor">{flavor}</p>}
        </div>
      )}

      <button type="button" className="primary-btn" onClick={onBegin}>
        {t.ui.takeChair}
      </button>
      <p className="hint-text">{t.ui.hintText}</p>
    </div>
  )
}

export default StartScreen
