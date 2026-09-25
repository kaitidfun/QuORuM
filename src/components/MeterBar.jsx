// Matches the crisis-card thresholds in game/cards.js — this is the point
// where things start actively going wrong, not the hard game-over edge.
const DANGER = {
  morale: { low: 20 },
  supplies: { low: 20 },
  order: { low: 15, high: 80 },
  snowblind: { high: 65 },
}

function MeterBar({ label, value, tone }) {
  const danger = DANGER[tone] || {}
  const inDanger = (danger.low != null && value <= danger.low) || (danger.high != null && value >= danger.high)

  return (
    <div className={`meter meter--${tone} ${inDanger ? 'meter--danger' : ''}`}>
      <div className="meter__label">
        <span>{label}</span>
        <span className="meter__value">{Math.round(value)}</span>
      </div>
      <div className="meter__track">
        {danger.low != null && <span className="meter__danger-mark" style={{ left: `${danger.low}%` }} />}
        {danger.high != null && <span className="meter__danger-mark" style={{ left: `${danger.high}%` }} />}
        <div className="meter__fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

export default MeterBar
