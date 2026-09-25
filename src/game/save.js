const SAVE_KEY = 'quorum-save-v1'

function defaultSave() {
  return {
    totalRuns: 0,
    deaths: [],
    legacyFlags: {},
    cardSeenCounts: {},
    codexSeen: {},
    codexRead: {},
  }
}

function persist(save) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(save))
  } catch {
    // storage unavailable, ignore
  }
}

export function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY)
    if (!raw) return defaultSave()
    const parsed = JSON.parse(raw)
    return { ...defaultSave(), ...parsed }
  } catch {
    return defaultSave()
  }
}

export function recordRunEnd({ cause, turn, flags, seenIds = [] }) {
  const save = loadSave()
  save.totalRuns += 1
  save.deaths.unshift({ cause, turn })
  save.deaths = save.deaths.slice(0, 10)
  save.legacyFlags = { ...save.legacyFlags, ...flags }
  const counts = { ...save.cardSeenCounts }
  for (const id of seenIds) counts[id] = (counts[id] || 0) + 1
  save.cardSeenCounts = counts
  persist(save)
  return save
}

// Marks a codex category ('stages' | 'units') as having been mentioned by a
// card at least once. Drives the persistent unread badge on its icon.
export function markCodexSeen(category) {
  const save = loadSave()
  if (save.codexSeen[category]) return save
  save.codexSeen = { ...save.codexSeen, [category]: true }
  persist(save)
  return save
}

// Marks a codex category as opened/read, clearing its unread badge.
export function markCodexRead(category) {
  const save = loadSave()
  if (save.codexRead[category]) return save
  save.codexRead = { ...save.codexRead, [category]: true }
  persist(save)
  return save
}
