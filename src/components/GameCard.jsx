import { useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const SWIPE_THRESHOLD = 110
const LEAN_THRESHOLD = 24

function GameCard({ card, onChoose, day, swapped }) {
  const { t } = useLanguage()
  const copy = t.cards[card.id]
  const [dragX, setDragX] = useState(0)
  const [dragging, setDragging] = useState(false)
  const startX = useRef(0)
  const pointerId = useRef(null)

  // `swapped` randomizes which authored choice (left/right) renders on which
  // visual side each time a card is drawn, so position can't be learned as
  // a shortcut for "which side is safe."
  const visualLeftKey = swapped ? 'right' : 'left'
  const visualRightKey = swapped ? 'left' : 'right'

  function handlePointerDown(e) {
    pointerId.current = e.pointerId
    startX.current = e.clientX
    setDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function handlePointerMove(e) {
    if (!dragging || e.pointerId !== pointerId.current) return
    setDragX(e.clientX - startX.current)
  }

  function settle(committed) {
    setDragging(false)
    if (committed) {
      onChoose(dragX > 0 ? visualRightKey : visualLeftKey)
    }
    setDragX(0)
  }

  function handlePointerUp() {
    if (!dragging) return
    settle(Math.abs(dragX) > SWIPE_THRESHOLD)
  }

  const rotation = dragX / 18
  const leanLeft = dragX < -LEAN_THRESHOLD
  const leanRight = dragX > LEAN_THRESHOLD
  const pull = Math.min(1, Math.abs(dragX) / SWIPE_THRESHOLD)

  return (
    <div className="card-stage">
      <div className="card-day">{t.ui.dayLabel(day)}</div>
      <div
        className={`game-card ${dragging ? 'game-card--dragging' : 'game-card--spring'}`}
        style={{ transform: `translateX(${dragX}px) rotate(${rotation}deg)` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => settle(false)}
      >
        <span className={`card-arrow card-arrow--left ${leanLeft ? 'card-arrow--active' : ''}`} aria-hidden="true">
          &#8592;
        </span>
        <span className={`card-arrow card-arrow--right ${leanRight ? 'card-arrow--active' : ''}`} aria-hidden="true">
          &#8594;
        </span>
        <p className="game-card__text">{copy.text}</p>
      </div>

      <div className="choice-buttons">
        <button
          type="button"
          className={`choice-btn ${leanLeft ? 'choice-btn--lean' : ''}`}
          style={leanLeft ? { transform: `scale(${1 + pull * 0.06})` } : undefined}
          onClick={() => onChoose(visualLeftKey)}
        >
          {copy[visualLeftKey]}
        </button>
        <button
          type="button"
          className={`choice-btn ${leanRight ? 'choice-btn--lean' : ''}`}
          style={leanRight ? { transform: `scale(${1 + pull * 0.06})` } : undefined}
          onClick={() => onChoose(visualRightKey)}
        >
          {copy[visualRightKey]}
        </button>
      </div>
    </div>
  )
}

export default GameCard
