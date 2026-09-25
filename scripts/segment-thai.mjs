// Regenerates src/i18n/th.js from src/i18n/th.source.js.
//
// Edit th.source.js (plain Thai text, no zero-width spaces) when adding or
// changing Thai content. Then run: node scripts/segment-thai.mjs
//
// This app's text renderer doesn't reliably break Thai at word boundaries
// on its own (confirmed: even Intl.Segmenter misbehaves in this runtime),
// so we pre-segment every Thai string offline with the 'wordcut'
// dictionary-based segmenter and bake invisible zero-width spaces (U+200B)
// between words into the generated file.
import wordcut from 'wordcut'
import { th } from '../src/i18n/th.source.js'
import { writeFileSync } from 'fs'

wordcut.init()
const ZWSP = '​'

function zwLine(text) {
  if (!/[฀-๿]/.test(text)) return text
  return wordcut.cut(text).split('|').join(ZWSP)
}

// Segment line by line so embedded newlines (e.g. paragraph breaks in the
// intro text) never get fed into the segmenter as part of a "word".
function zw(text) {
  if (typeof text !== 'string') return text
  return text.split('\n').map(zwLine).join('\n')
}

function deepMap(value) {
  if (typeof value === 'string') return zw(value)
  if (typeof value === 'function') return undefined
  if (Array.isArray(value)) return value.map(deepMap)
  if (value && typeof value === 'object') {
    const out = {}
    for (const k of Object.keys(value)) out[k] = deepMap(value[k])
    return out
  }
  return value
}

const transformed = deepMap(th)

const dayLabelPrefix = zw('วันที่ ')
const termEndedPrefix = zw('วันที่ ')
const termEndedSuffix = zw(' — วาระของคุณจบลงแล้ว')
const legacyA = zw('นี่คือประธานคนที่ ')
const legacyB = zw(' ก่อนหน้านี้มีคณะบริหารมาแล้ว ')
const legacyC = zw(' ชุด')

const out = JSON.stringify(transformed, null, 2)

const header = `// AUTO-GENERATED — do not hand-edit.
// Source: src/i18n/th.source.js. Regenerate with: node scripts/segment-thai.mjs
//
// Thai strings here are pre-segmented with invisible zero-width spaces
// (U+200B) between words so the app's text renderer breaks lines at real
// word boundaries instead of mid-word/mid-character.

`

const jsBody = `export const th = ${out}

th.ui.dayLabel = (n) => \`${dayLabelPrefix}\${n}\`
th.ui.termEnded = (n) => \`${termEndedPrefix}\${n}${termEndedSuffix}\`
th.ui.legacyChairperson = (n, prev) => \`${legacyA}\${n}${legacyB}\${prev}${legacyC}\`
`

writeFileSync(new URL('../src/i18n/th.js', import.meta.url), header + jsBody, 'utf8')
console.log('wrote src/i18n/th.js')
