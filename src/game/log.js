// Per-run "Note to Self" log: personal reflections unlocked when *this*
// term crosses a narrative threshold (a meter, the day count, the hidden
// lore counter). Unlike the always-available Stages / Camp Layout codex
// pages, these are per-run — a fresh term starts with none unlocked — and
// their text is a reaction to the state, not a copy of any card's own text.
// Order here doubles as display order once unlocked, which is also roughly
// the order a real run tends to hit them in.
export const logEntries = [
  { id: 'log-first-week', condition: (s) => s.day >= 7 },
  {
    id: 'log-strain',
    condition: (s) => s.meters.morale < 25 || s.meters.supplies < 25 || s.meters.order < 25,
  },
  { id: 'log-grip-tightening', condition: (s) => s.meters.order > 75 },
  { id: 'log-snowblind-rising', condition: (s) => s.meters.snowblind >= 30 },
  { id: 'log-piecing-together', condition: (s) => s.lore >= 35 },
  { id: 'log-final-stretch', condition: (s) => s.day >= 60 },
]

// state: { day, meters, lore, flags }. Returns ids newly crossed this turn.
export function checkNewLogEntries(state, alreadyUnlocked) {
  return logEntries
    .filter((entry) => !alreadyUnlocked.includes(entry.id))
    .filter((entry) => entry.condition(state))
    .map((entry) => entry.id)
}
