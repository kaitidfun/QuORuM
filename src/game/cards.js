// Card layers:
//   1 = mundane committee business (the bulk of the game)
//   2 = Snowblind / the world outside (grows more frequent over time)
//
// Display text (English + Thai) lives in src/i18n/*.js, keyed by card id.
// This file is structure + logic only.
//
// effects: deltas applied to { morale, supplies, order, snowblind }
// setFlag: optional string stored for this run (and sometimes remembered next run)
// loreEffect: optional delta to the hidden Himmavatan-story progress counter
// queueCard: optional { id, delay } — forces that card to appear `delay` turns later
// minTurn / maxTurn / minRuns / requires(state): eligibility gates
//   state passed to requires(): { turn, meters, flags, totalRuns, recentIds }

const rawCards = [
  // ---------------- LAYER 1: committee business ----------------
  { id: 'water-quota', layer: 1, jargon: 'units', left: { effects: { order: 7, morale: -5 } }, right: { effects: { order: -5, morale: 5 } } },
  { id: 'karaoke-night', layer: 1, left: { effects: { morale: 7, order: -4, snowblind: 3 }, setFlag: 'karaokeAllowed' }, right: { effects: { order: 6, morale: -6 }, setFlag: 'karaokeBanned' } },
  { id: 'bathroom-bylaw', layer: 1, left: { effects: { order: 6, supplies: -3 } }, right: { effects: { morale: 3, order: -5 } } },
  { id: 'snack-theft', layer: 1, left: { effects: { supplies: 5, order: -3 } }, right: { effects: { morale: 3, supplies: -3 } } },
  { id: 'thermostat-war', layer: 1, jargon: 'units', left: { effects: { order: 3, morale: -2 }, setFlag: 'blockAAlly' }, right: { effects: { order: 3, morale: -2 }, setFlag: 'blockBAlly' } },
  { id: 'committee-title', layer: 1, left: { effects: { morale: 4, order: -2 } }, right: { effects: { order: 2, morale: -2 } } },
  { id: 'newsletter-gossip', layer: 1, left: { effects: { morale: 6, order: -5 } }, right: { effects: { order: 5, morale: -6 } } },
  { id: 'birthday-party', layer: 1, jargon: 'units', left: { effects: { morale: 8, supplies: -8 } }, right: { effects: { supplies: 3, morale: -6 } } },
  { id: 'rigged-election', layer: 1, left: { effects: { order: 5, supplies: -3 } }, right: { effects: { morale: -2, snowblind: 2 }, setFlag: 'riggedRumor' } },
  { id: 'pet-policy', layer: 1, left: { effects: { order: 5, morale: -7 } }, right: { effects: { morale: 7, order: -5 } } },
  { id: 'rename-camp', layer: 1, left: { effects: { morale: 3, order: -1 } }, right: { effects: { order: 2, morale: -1 } } },
  { id: 'noise-complaint', layer: 1, left: { effects: { order: 2, morale: -2 } }, right: { effects: { morale: 2, order: -2 } } },
  { id: 'heating-budget', layer: 1, left: { effects: { supplies: 4, morale: -4 } }, right: { effects: { morale: 2, order: -2, snowblind: 1 } } },
  { id: 'sled-parking', layer: 1, left: { effects: { order: 5, morale: -2 } }, right: { effects: { supplies: 1, order: -3 } } },
  { id: 'potluck-signup', layer: 1, left: { effects: { order: 4, morale: -3 } }, right: { effects: { morale: 2, order: -2 } } },
  { id: 'memo-tone', layer: 1, left: { effects: { morale: 3, order: -2 } }, right: { effects: { order: 3, morale: -2 } } },
  { id: 'anniversary', layer: 1, left: { effects: { order: 3, morale: -2 } }, right: { effects: { morale: 6, supplies: -5 } } },
  { id: 'compost-manifesto', layer: 1, left: { effects: { order: 2, morale: -2, supplies: -1 } }, right: { effects: { supplies: 1, order: -2 } } },

  // ---------------- LAYER 2: Snowblind / the world outside ----------------
  { id: 'staring-snow', layer: 2, jargon: 'units', left: { effects: { morale: 2, snowblind: -2 } }, right: { effects: { morale: 1, snowblind: 3 } } },
  { id: 'shared-dream', layer: 2, left: { effects: { supplies: 1, snowblind: 2 } }, right: { effects: { order: 3, morale: -3 } } },
  { id: 'evening-circle', layer: 2, left: { effects: { morale: -4, order: 4, snowblind: -5 }, setFlag: 'circleShutDown' }, right: { effects: { morale: 4, snowblind: 8 }, setFlag: 'circleAllowed' } },
  { id: 'supply-run-sighting', layer: 2, left: { effects: { order: 3, snowblind: 2 } }, right: { effects: { supplies: -3, snowblind: -3 } } },
  { id: 'terminology-vote', layer: 2, jargon: 'stages', left: { effects: { morale: 2, order: -1 } }, right: { effects: { order: 2, morale: -2 } } },
  { id: 'exit-request', layer: 2, jargon: 'stages', left: { effects: { supplies: 2, morale: -4 } }, right: { effects: { order: 3, snowblind: 3 } } },
  { id: 'greenhouse-collapse', layer: 2, left: { effects: { supplies: 3, morale: -5, order: 1 } }, right: { effects: { supplies: -6, morale: 3 } } },
  { id: 'child-listening', layer: 2, left: { effects: { order: 3, morale: -3 } }, right: { effects: { snowblind: 3, morale: 1 } } },
  { id: 'deputy-listening', layer: 2, left: { effects: { order: 1, snowblind: -3, morale: -3 } }, right: { effects: { morale: 2, snowblind: 3 } } },
  { id: 'gate-knocking', layer: 2, left: { effects: { order: 2, snowblind: -3 } }, right: { effects: { morale: 2, snowblind: 3 } } },
  { id: 'census-stage-box', layer: 2, jargon: 'stages', left: { effects: { morale: 2, snowblind: 3 } }, right: { effects: { order: 3, morale: -3, snowblind: -2 } } },
  { id: 'hall-request', layer: 2, minTurn: 14, left: { effects: { snowblind: 12, morale: 8, order: -6 } }, right: { effects: { snowblind: -10, morale: -10, order: 6 } } },

  // ---------------- Threshold crisis cards ----------------
  // Morale critically low
  { id: 'crisis-morale-noshows', layer: 1, weight: 3, requires: (s) => s.meters.morale < 20, left: { effects: { order: 6, morale: -5 } }, right: { effects: { morale: 5, order: -6 } } },
  { id: 'crisis-morale-graffiti', layer: 1, weight: 3, requires: (s) => s.meters.morale < 20, left: { effects: { order: 2, morale: -2 } }, right: { effects: { morale: 4, order: -3 } } },
  { id: 'crisis-morale-resign', layer: 1, weight: 3, requires: (s) => s.meters.morale < 20, left: { effects: { morale: 3, supplies: -2 } }, right: { effects: { order: -3, morale: 2 } } },

  // Supplies critically low
  { id: 'crisis-supplies-rationcut', layer: 1, weight: 3, requires: (s) => s.meters.supplies < 20, left: { effects: { order: 3, morale: -5 } }, right: { effects: { morale: 3, order: -4 } } },
  { id: 'crisis-supplies-blackmarket', layer: 1, weight: 3, requires: (s) => s.meters.supplies < 20, left: { effects: { order: 4, morale: -4 } }, right: { effects: { supplies: 3, order: -5 } } },
  { id: 'crisis-supplies-huntparty', layer: 1, weight: 3, requires: (s) => s.meters.supplies < 20, left: { effects: { supplies: 4, snowblind: 3 } }, right: { effects: { morale: -4, order: 2 } } },

  // Order critically low
  { id: 'crisis-order-brawl', layer: 1, weight: 3, requires: (s) => s.meters.order < 15, left: { effects: { order: 6, morale: -5 } }, right: { effects: { morale: 3, order: -3 } } },
  { id: 'crisis-order-ignoredmemo', layer: 1, weight: 3, requires: (s) => s.meters.order < 15, left: { effects: { order: 4, morale: -4 } }, right: { effects: { morale: 4, order: -2 } } },
  { id: 'crisis-order-curfew', layer: 1, weight: 3, requires: (s) => s.meters.order < 15, left: { effects: { order: 5, supplies: -4 } }, right: { effects: { morale: 3, order: -4 } } },

  // Order critically high (tyranny pressure)
  { id: 'crisis-tyranny-rulecount', layer: 2, weight: 3, requires: (s) => s.meters.order > 80, left: { effects: { order: 4, morale: -6 } }, right: { effects: { morale: 5, order: -6 } } },
  { id: 'crisis-tyranny-petition', layer: 2, weight: 3, requires: (s) => s.meters.order > 80, left: { effects: { order: 3, morale: -6 } }, right: { effects: { morale: 5, order: -5 } } },
  { id: 'crisis-tyranny-silentshift', layer: 2, weight: 3, requires: (s) => s.meters.order > 80, left: { effects: { order: 2, snowblind: 2 } }, right: { effects: { morale: 4, order: -6 } } },

  // Snowblind critically high
  { id: 'crisis-snowblind-opentalk', layer: 2, weight: 3, jargon: 'stages', requires: (s) => s.meters.snowblind > 65, left: { effects: { order: 2, snowblind: -4, morale: -2 } }, right: { effects: { morale: 3, snowblind: 4 } } },
  { id: 'crisis-snowblind-volunteers', layer: 2, weight: 3, requires: (s) => s.meters.snowblind > 65, left: { effects: { order: -2, snowblind: -3, morale: -1 } }, right: { effects: { supplies: 2, snowblind: 5 } } },
  { id: 'crisis-snowblind-silence', layer: 2, weight: 3, requires: (s) => s.meters.snowblind > 65, left: { effects: { order: 2, snowblind: -3 } }, right: { effects: { morale: 2, snowblind: 4 } } },

  // ---------------- Himmavatan Cycle — lore arc ----------------
  // This arc reads as one continuing story ("one version" / "another
  // version" / "a third version" / "not hundreds anymore, thousands") so
  // each step requires the previous one's flag — otherwise the weighted
  // draw could hand a player "Another version" of a story they were never
  // told, out of nowhere.
  { id: 'lore-first-whisper', layer: 2, weight: 2, minTurn: 6, left: { effects: { snowblind: 2 }, loreEffect: 6, setFlag: 'heardWhisper' }, right: { effects: { order: 2 }, loreEffect: 1, setFlag: 'heardWhisper' } },
  { id: 'lore-origin-rock', layer: 2, weight: 2, minTurn: 10, requires: (s) => s.flags.heardWhisper, left: { effects: { snowblind: 2 }, loreEffect: 5, setFlag: 'heardOriginRock' }, right: { effects: { order: 1 }, loreEffect: 1, setFlag: 'heardOriginRock' } },
  { id: 'lore-origin-drift', layer: 2, weight: 2, minTurn: 10, requires: (s) => s.flags.heardOriginRock, left: { effects: { snowblind: 2 }, loreEffect: 5, setFlag: 'heardOriginDrift' }, right: { effects: { order: 1 }, loreEffect: 1, setFlag: 'heardOriginDrift' } },
  { id: 'lore-origin-awake', layer: 2, weight: 2, minTurn: 14, requires: (s) => s.flags.heardOriginDrift, left: { effects: { snowblind: 2 }, loreEffect: 5, setFlag: 'heardOriginAwake' }, right: { effects: { order: 1 }, loreEffect: 1, setFlag: 'heardOriginAwake' } },
  { id: 'lore-follower-count', layer: 2, weight: 2, minTurn: 18, requires: (s) => s.flags.heardOriginAwake, left: { effects: { supplies: -2 }, loreEffect: 6, setFlag: 'heardFollowerCount' }, right: { effects: { morale: 2 }, loreEffect: 1, setFlag: 'heardFollowerCount' } },
  { id: 'lore-convert-offer', layer: 2, weight: 2, minTurn: 24, requires: (s) => s.flags.heardFollowerCount, left: { effects: { morale: 2, snowblind: 3 }, loreEffect: 6, setFlag: 'heardConvertOffer' }, right: { effects: { order: 2 }, loreEffect: 1, setFlag: 'heardConvertOffer' } },
  {
    id: 'lore-thousand-strong',
    layer: 2,
    weight: 2,
    minTurn: 30,
    requires: (s) => s.flags.heardConvertOffer,
    left: { effects: { order: 3, supplies: -3 }, loreEffect: 5, queueCard: { id: 'lore-watch-doubled', delay: 3 } },
    right: { effects: { morale: 3 }, loreEffect: 5, queueCard: { id: 'lore-false-calm', delay: 3 } },
  },
  { id: 'lore-watch-doubled', layer: 2, weight: 1, left: { effects: {}, loreEffect: 4 }, right: { effects: { order: 2, morale: -3 }, loreEffect: 6 } },
  { id: 'lore-false-calm', layer: 2, weight: 1, left: { effects: { morale: 3 }, loreEffect: 3 }, right: { effects: { snowblind: 2 }, loreEffect: 5 } },
  { id: 'lore-camp-fell', layer: 2, weight: 2, minTurn: 36, left: { effects: { supplies: -3, morale: 2 }, loreEffect: 8, setFlag: 'heardCampFell' }, right: { effects: { order: 2 }, loreEffect: 4, setFlag: 'heardCampFell' } },
  // "Piecing it together" only makes sense once the player has the camp-fell data point.
  { id: 'lore-the-pattern', layer: 2, weight: 2, minTurn: 42, requires: (s) => s.flags.heardCampFell, left: { effects: { order: 2, morale: -3 }, loreEffect: 7 }, right: { effects: { snowblind: 2 }, loreEffect: 4 } },
  { id: 'lore-gate-visitor', layer: 2, weight: 2, minTurn: 48, left: { effects: { order: 3, supplies: -2 }, loreEffect: 6 }, right: { effects: { morale: 2 }, loreEffect: 5 } },
  { id: 'lore-the-hum', layer: 2, weight: 2, minTurn: 54, left: { effects: { snowblind: 3 }, loreEffect: 7, setFlag: 'heardTheHum' }, right: { effects: { order: 1 }, loreEffect: 3 } },
  { id: 'lore-empty-camps', layer: 2, weight: 2, minTurn: 62, left: { effects: { order: -2, morale: -4 }, loreEffect: 8 }, right: { effects: { snowblind: 2 }, loreEffect: 5 } },
  { id: 'lore-the-invitation', layer: 2, weight: 2, minTurn: 68, left: { effects: { order: 2, snowblind: -2 }, loreEffect: 5 }, right: { effects: { morale: -2, snowblind: 3 }, loreEffect: 8 } },

  // ---------------- Chain: The Ration Ledger (branching, converges later) ----------------
  {
    id: 'ledger-discrepancy',
    layer: 1,
    minTurn: 8,
    left: { effects: { order: 2, morale: -1 }, setFlag: 'ledgerQuiet', queueCard: { id: 'ledger-quiet-followup', delay: 5 } },
    right: { effects: { order: 3, morale: -3, supplies: -1 }, setFlag: 'ledgerAudit', queueCard: { id: 'ledger-audit-result', delay: 4 } },
  },
  { id: 'ledger-quiet-followup', layer: 1, left: { effects: { supplies: -3 }, setFlag: 'ledgerIgnored' }, right: { effects: { order: 3, morale: -2 }, setFlag: 'ledgerReformed' } },
  { id: 'ledger-audit-result', layer: 1, left: { effects: { morale: -2, order: 2 }, setFlag: 'ledgerReformed' }, right: { effects: { order: 4, morale: -5 }, setFlag: 'ledgerPublic' } },
  {
    id: 'ledger-second-offender',
    layer: 1,
    requires: (s) => s.flags.ledgerReformed || s.flags.ledgerPublic || s.flags.ledgerIgnored,
    left: { effects: { order: 3, morale: -3 } },
    right: { effects: { morale: 2, order: -3 } },
  },

  // ---------------- Chain: The Radio (converges with the lore arc) ----------------
  {
    id: 'radio-static',
    layer: 1,
    minTurn: 20,
    left: { effects: { supplies: -3 }, setFlag: 'radioApproved', queueCard: { id: 'radio-first-contact', delay: 5 } },
    right: { effects: { supplies: 2 } },
  },
  { id: 'radio-first-contact', layer: 1, left: { effects: { morale: 4 }, setFlag: 'radioHonest', queueCard: { id: 'radio-trade-offer', delay: 6 } }, right: { effects: { order: 2 }, setFlag: 'radioBluff', queueCard: { id: 'radio-trade-offer', delay: 6 } } },
  { id: 'radio-trade-offer', layer: 1, left: { effects: { supplies: 5, order: -2 } }, right: { effects: { order: 2, morale: -2 } } },
  {
    id: 'radio-warning',
    layer: 2,
    weight: 2,
    requires: (s) => s.flags.radioApproved && s.flags.heardTheHum,
    left: { effects: { morale: -3, snowblind: 2 }, loreEffect: 4 },
    right: { effects: { order: 2, morale: -2 }, loreEffect: 6 },
  },

  // ---------------- More committee business ----------------
  { id: 'laundry-rotation', layer: 1, left: { effects: { order: 4, morale: -3 } }, right: { effects: { morale: 3, order: -3 } } },
  { id: 'school-lessons', layer: 1, left: { effects: { morale: 4, supplies: -2 } }, right: { effects: { order: 2, morale: -2 } } },
  { id: 'medicine-shortage', layer: 1, left: { effects: { order: 3, morale: -3 } }, right: { effects: { morale: 2, order: -2 } } },
  { id: 'generator-fuel', layer: 1, left: { effects: { supplies: 3, morale: -4 } }, right: { effects: { morale: 1, order: -2, supplies: 2 } } },
  { id: 'mail-system', layer: 1, left: { effects: { morale: 3, order: -2 } }, right: { effects: { order: 2, morale: -2 } } },
  { id: 'funeral-rites', layer: 1, left: { effects: { supplies: -3, morale: 2 } }, right: { effects: { supplies: 2, morale: -3 } } },
  { id: 'camp-currency', layer: 1, left: { effects: { order: -2, morale: 3 } }, right: { effects: { order: 3, morale: -3 } } },
  { id: 'wall-mural', layer: 1, left: { effects: { morale: 3, order: -1 } }, right: { effects: { order: 2, morale: -3 } } },
  { id: 'library-rationing', layer: 1, left: { effects: { order: 2, morale: -1 } }, right: { effects: { morale: 1, order: -1 } } },
  { id: 'dress-code', layer: 1, left: { effects: { order: 3, morale: -3 } }, right: { effects: { morale: 3, order: -2 } } },
  { id: 'shift-trading', layer: 1, left: { effects: { order: 2, supplies: -1 } }, right: { effects: { order: 2, morale: -3 } } },
  { id: 'tool-checkout', layer: 1, left: { effects: { order: 3, morale: -2 } }, right: { effects: { morale: 2, supplies: -2 } } },
  { id: 'scrap-metal', layer: 1, left: { effects: { supplies: 3, snowblind: 1 } }, right: { effects: { order: 1, supplies: -1 } } },
  { id: 'camp-court', layer: 1, left: { effects: { order: 3, morale: -1 } }, right: { effects: { morale: 1, order: -2 } } },
  { id: 'stray-dog', layer: 1, left: { effects: { morale: 4, supplies: -2 } }, right: { effects: { order: 1, morale: -3 } } },
  { id: 'music-hour', layer: 1, left: { effects: { morale: 5, snowblind: 2 } }, right: { effects: { supplies: 1, morale: -3 } } },
  { id: 'language-class', layer: 1, left: { effects: { morale: 3 } }, right: { effects: { order: 1, morale: -2 } } },
  { id: 'elder-seat', layer: 1, left: { effects: { order: 2, morale: -2 } }, right: { effects: { morale: 2, order: -2 } } },
  { id: 'hazard-pay', layer: 1, left: { effects: { morale: 4, supplies: -3 } }, right: { effects: { order: 2, morale: -4 } } },
  { id: 'holiday-calendar', layer: 1, left: { effects: { morale: 2, order: -1 } }, right: { effects: { order: 2, morale: -2 } } },
  { id: 'shovel-duty', layer: 1, left: { effects: { order: 3, morale: -2 } }, right: { effects: { supplies: -3, morale: 3 } } },
  { id: 'boot-repair', layer: 1, left: { effects: { order: 2, morale: -1 } }, right: { effects: { order: 1, morale: -2 } } },
  { id: 'blanket-count', layer: 1, left: { effects: { morale: 2, order: 1 } }, right: { effects: { supplies: 1, morale: -2 } } },
  { id: 'tobacco-ration', layer: 1, left: { effects: { order: 2, morale: -2 } }, right: { effects: { supplies: 3, morale: -3 } } },
  { id: 'gambling-ring', layer: 1, left: { effects: { order: 3, morale: -3 } }, right: { effects: { morale: 3, order: -3 } } },
  { id: 'tattoo-trend', layer: 2, jargon: 'stages', left: { effects: { order: 2, snowblind: -1 } }, right: { effects: { morale: 2, snowblind: 2 } } },
  { id: 'baby-naming', layer: 1, left: { effects: { morale: 3 } }, right: { effects: { order: 1, morale: -2 } } },
  { id: 'flag-redesign', layer: 1, left: { effects: { morale: 3, order: -1 } }, right: { effects: { order: 2, morale: -2 } } },
  { id: 'snowball-tournament', layer: 1, left: { effects: { morale: 4, order: -1 } }, right: { effects: { order: 2, morale: -3 } } },
  { id: 'theater-night', layer: 1, left: { effects: { morale: 4, supplies: -1 } }, right: { effects: { supplies: 1, morale: -3 } } },
  { id: 'minutes-typo', layer: 1, left: { effects: { order: 2, morale: -1 } }, right: { effects: { morale: 1, order: -1 } } },
  { id: 'seating-chart', layer: 1, left: { effects: { order: 3, morale: -3 } }, right: { effects: { morale: 2, order: -2 } } },
  { id: 'greenhouse-expansion', layer: 1, left: { effects: { supplies: 3, order: -2 } }, right: { effects: { order: 2, supplies: -1 } } },
  { id: 'water-filter', layer: 2, left: { effects: { supplies: 2, snowblind: 1 } }, right: { effects: { order: 2, morale: -3 } } },
  { id: 'generator-noise', layer: 1, left: { effects: { order: 1, morale: 2, supplies: -1 } }, right: { effects: { order: 2, morale: -3 } } },
  { id: 'literacy-class', layer: 1, left: { effects: { morale: 3, supplies: -1 } }, right: { effects: { morale: 1, order: 1 } } },
  { id: 'newspaper-editor', layer: 1, left: { effects: { order: 2, morale: -1 } }, right: { effects: { morale: 3, order: -2 } } },
  { id: 'mascot-costume', layer: 1, left: { effects: { morale: 3 } }, right: { effects: { order: 1, morale: -2 } } },
  { id: 'id-badges', layer: 2, jargon: 'stages', left: { effects: { order: 3, snowblind: 2 } }, right: { effects: { morale: 1, order: -1 } } },
  { id: 'coffee-stash', layer: 1, left: { effects: { morale: 5, supplies: -2 } }, right: { effects: { order: 2, morale: -4 } } },
  { id: 'card-tournament', layer: 1, left: { effects: { morale: 3, supplies: -2 } }, right: { effects: { order: 2, morale: -2 } } },
  { id: 'mirror-shortage', layer: 1, left: { effects: { supplies: -1, morale: 2 } }, right: { effects: { order: 1, morale: -2 } } },
  { id: 'diary-privacy', layer: 1, left: { effects: { order: 1, morale: 2 } }, right: { effects: { order: -2, morale: -1 } } },
  { id: 'snow-sculpture', layer: 1, left: { effects: { morale: 4 } }, right: { effects: { order: 1, morale: -3 } } },
  { id: 'term-limits', layer: 1, left: { effects: { morale: 3, order: -1 } }, right: { effects: { order: 2, morale: -3 } } },

  // ---------------- More Snowblind / the world outside ----------------
  { id: 'frostbite-miracle', layer: 2, left: { effects: { order: 2, snowblind: -1 } }, right: { effects: { morale: -1, snowblind: 2 } } },
  { id: 'compass-spin', layer: 2, left: { effects: { order: 2, snowblind: -2 } }, right: { effects: { snowblind: 3 } } },
  { id: 'shared-humming', layer: 2, left: { effects: { order: 1, snowblind: -1 } }, right: { effects: { morale: 1, snowblind: 3 } } },
  { id: 'footprints-in', layer: 2, left: { effects: { order: 2, snowblind: -2 } }, right: { effects: { morale: 1, snowblind: 2 } } },
  { id: 'missing-reappear', layer: 2, left: { effects: { snowblind: 4, morale: 2 } }, right: { effects: { order: 2, snowblind: -1 } } },
  { id: 'warm-spot', layer: 2, left: { effects: { order: 2, supplies: -1 } }, right: { effects: { morale: 3, snowblind: 3 } } },
  { id: 'dream-map', layer: 2, left: { effects: { snowblind: -1 } }, right: { effects: { order: 1, snowblind: 3 } } },
  { id: 'silent-vote', layer: 2, left: { effects: { snowblind: 3 } }, right: { effects: { order: 1, morale: -2, snowblind: -2 } } },
  { id: 'new-language', layer: 2, jargon: 'stages', left: { effects: { order: 2, morale: -3, snowblind: -2 } }, right: { effects: { snowblind: 3 } } },
  { id: 'snow-angel', layer: 2, left: { effects: { order: 1, snowblind: -1 } }, right: { effects: { morale: 1, snowblind: 3 } } },
  { id: 'missing-hour', layer: 2, left: { effects: { order: 1, snowblind: -1 } }, right: { effects: { snowblind: 3, morale: -1 } } },
  { id: 'gate-flowers', layer: 2, left: { effects: { order: 2, snowblind: -2 } }, right: { effects: { morale: 3, snowblind: 3 } } },
  { id: 'echo-voice', layer: 2, left: { effects: { order: 2, morale: -2, snowblind: -1 } }, right: { effects: { snowblind: 2 } } },
  { id: 'counted-twice', layer: 2, left: { effects: { order: 3, snowblind: -2 } }, right: { effects: { morale: 1, snowblind: 3 } } },
  { id: 'warmth-offer', layer: 2, jargon: 'stages', left: { effects: { order: 2, morale: -3, snowblind: -3 } }, right: { effects: { morale: 2, snowblind: 5 } } },
  { id: 'reflection-lag', layer: 2, left: { effects: { morale: 1, snowblind: -2 } }, right: { effects: { snowblind: 2 } } },
  { id: 'shared-name', layer: 2, left: { effects: { order: 1, snowblind: -2 } }, right: { effects: { snowblind: 3 } } },
  { id: 'still-air', layer: 2, left: { effects: { order: 2, snowblind: -1 } }, right: { effects: { morale: 3, snowblind: 3 } } },
  { id: 'borrowed-warmth', layer: 2, left: { effects: { order: 2, snowblind: -2 } }, right: { effects: { morale: 3, snowblind: 3 } } },
  { id: 'unlabeled-grave', layer: 2, left: { effects: { order: 1, morale: -3, snowblind: 3 } }, right: { effects: { snowblind: -1 } } },

  // ---------------- More threshold crisis cards ----------------
  { id: 'crisis-morale-quietquitting', layer: 1, weight: 3, requires: (s) => s.meters.morale < 20, left: { effects: { morale: 3, order: -2 } }, right: { effects: { order: 2, morale: -3 } } },
  { id: 'crisis-morale-emptychair', layer: 1, weight: 3, requires: (s) => s.meters.morale < 20, left: { effects: { order: 3, morale: -4 } }, right: { effects: { morale: 2, order: -3 } } },
  { id: 'crisis-supplies-thinsoup', layer: 1, weight: 3, requires: (s) => s.meters.supplies < 20, left: { effects: { supplies: -5, morale: 4 } }, right: { effects: { morale: -4, order: 2 } } },
  { id: 'crisis-supplies-countlies', layer: 1, weight: 3, requires: (s) => s.meters.supplies < 20, left: { effects: { order: 3, morale: -4 } }, right: { effects: { morale: 2, order: -3 } } },
  { id: 'crisis-order-twoleaders', layer: 1, weight: 3, jargon: 'units', requires: (s) => s.meters.order < 15, left: { effects: { order: 5, morale: -4 } }, right: { effects: { morale: 3, order: -2 } } },
  { id: 'crisis-order-nobodyshows', layer: 1, weight: 3, requires: (s) => s.meters.order < 15, left: { effects: { order: 5, morale: -4 } }, right: { effects: { morale: 2, order: -3 } } },
  { id: 'crisis-tyranny-uniformagreement', layer: 2, weight: 3, requires: (s) => s.meters.order > 80, left: { effects: { order: 2, snowblind: 2 } }, right: { effects: { morale: 2, order: -4 } } },
  { id: 'crisis-tyranny-fearreport', layer: 2, weight: 3, requires: (s) => s.meters.order > 80, left: { effects: { order: 2, morale: -3 } }, right: { effects: { morale: 4, order: -6 } } },
  { id: 'crisis-snowblind-mapdrawing', layer: 2, weight: 3, requires: (s) => s.meters.snowblind > 65, left: { effects: { order: 2, snowblind: -4 } }, right: { effects: { morale: 1, snowblind: 4 } } },
  { id: 'crisis-snowblind-emptyseats', layer: 2, weight: 3, requires: (s) => s.meters.snowblind > 65, left: { effects: { order: 2, snowblind: -3 } }, right: { effects: { morale: 2, snowblind: 4 } } },

  // ---------------- Chain: The Apprentice Vanishes ----------------
  {
    id: 'apprentice-missing',
    layer: 1,
    minTurn: 25,
    left: { effects: { supplies: -2, order: 1 }, queueCard: { id: 'apprentice-found', delay: 3 } },
    right: { effects: { morale: 1 }, queueCard: { id: 'apprentice-found', delay: 4 } },
  },
  { id: 'apprentice-found', layer: 1, left: { effects: { morale: 2 }, queueCard: { id: 'apprentice-aftermath', delay: 5 } }, right: { effects: { order: 1, morale: -2, snowblind: 1 }, queueCard: { id: 'apprentice-aftermath', delay: 5 } } },
  { id: 'apprentice-aftermath', layer: 1, left: { effects: { morale: 2, order: -1 } }, right: { effects: { order: 1, morale: -2 } } },

  // ---------------- Yet more committee business ----------------
  { id: 'chess-club', layer: 1, left: { effects: { morale: 4, order: -1 } }, right: { effects: { morale: 1, order: 1 } } },
  { id: 'sign-language', layer: 1, left: { effects: { order: 3, morale: -2 } }, right: { effects: { morale: 3, order: -1 } } },
  { id: 'anthem-contest', layer: 1, left: { effects: { morale: 2, order: 1 } }, right: { effects: { order: -2, morale: 1 } } },
  { id: 'spirit-day', layer: 1, left: { effects: { morale: 4, order: -2 } }, right: { effects: { order: 2, morale: -3 } } },
  { id: 'glass-recycling', layer: 1, left: { effects: { supplies: 2, order: -1 } }, right: { effects: { order: 1, supplies: -1 } } },
  { id: 'dorm-space', layer: 1, left: { effects: { order: 3, morale: -2 } }, right: { effects: { morale: 1, order: -2 } } },
  { id: 'unit-conversion', layer: 1, left: { effects: { order: 2, morale: -1 } }, right: { effects: { order: 2, morale: -1 } } },
  { id: 'nightlight-policy', layer: 1, left: { effects: { morale: 2, supplies: -2 } }, right: { effects: { supplies: 1, morale: -2 } } },
  { id: 'barber-apprentice', layer: 1, left: { effects: { morale: 2, order: -1 } }, right: { effects: { order: 1, morale: -1 } } },
  { id: 'bathroom-cleaning', layer: 1, left: { effects: { order: 3, morale: -2 } }, right: { effects: { morale: 1, order: -2 } } },
  { id: 'knock-etiquette', layer: 1, left: { effects: { order: 2, morale: -2 } }, right: { effects: { morale: 1, order: -1 } } },
  { id: 'archive-storage', layer: 1, left: { effects: { order: -1, supplies: 2 } }, right: { effects: { order: 2, supplies: -1 } } },
  { id: 'lock-master-list', layer: 1, left: { effects: { order: 3, morale: -2 } }, right: { effects: { morale: 2, order: -2 } } },
  { id: 'countdown-display', layer: 2, left: { effects: { morale: 2, snowblind: 1 } }, right: { effects: { order: 1, morale: -2 } } },
  { id: 'lost-and-found', layer: 1, left: { effects: { order: 2, morale: -1 } }, right: { effects: { morale: 1, order: -1 } } },
  { id: 'special-diet', layer: 1, left: { effects: { morale: 3, supplies: -2 } }, right: { effects: { supplies: 1, morale: -3 } } },
  { id: 'found-instruments', layer: 1, left: { effects: { morale: 4, order: -1 } }, right: { effects: { order: 1, morale: -1 } } },
  { id: 'snow-globe', layer: 2, left: { effects: { morale: 2, snowblind: 1 } }, right: { effects: { order: 1, morale: -2 } } },
  { id: 'weather-contest', layer: 2, left: { effects: { morale: 3, snowblind: 1 } }, right: { effects: { order: 2, morale: -3 } } },
  { id: 'self-defense', layer: 1, left: { effects: { order: 2, morale: 2 } }, right: { effects: { morale: -2, order: 1 } } },
  { id: 'fire-watch', layer: 1, left: { effects: { order: 3, morale: -3 } }, right: { effects: { supplies: -3, morale: 3 } } },
  { id: 'camp-museum', layer: 1, left: { effects: { morale: 3, order: -1 } }, right: { effects: { order: 1, morale: -2 } } },
  { id: 'seed-vault', layer: 1, left: { effects: { supplies: -3, order: 2 } }, right: { effects: { supplies: 1, order: -1 } } },
  { id: 'skating-rink', layer: 1, left: { effects: { morale: 4, supplies: -1 } }, right: { effects: { supplies: 1, morale: -3 } } },
  { id: 'debate-club', layer: 1, left: { effects: { morale: 3, order: -1 } }, right: { effects: { order: 1, morale: -2 } } },
  { id: 'silent-auction', layer: 1, left: { effects: { morale: 3, supplies: -2 } }, right: { effects: { order: 1, morale: -2 } } },
  { id: 'apprentice-program', layer: 1, left: { effects: { morale: 3, order: 1 } }, right: { effects: { order: 1, morale: -2 } } },
  { id: 'chair-ration', layer: 1, left: { effects: { morale: -3, supplies: 1 } }, right: { effects: { morale: 3, order: -1 } } },
  { id: 'elder-retirement', layer: 1, left: { effects: { morale: 2, order: -1 } }, right: { effects: { order: 2, morale: -3 } } },
  { id: 'orphan-placement', layer: 1, left: { effects: { morale: -1, order: -1 } }, right: { effects: { order: 2, morale: -2 } } },
  { id: 'camp-motto', layer: 2, left: { effects: { morale: 2, snowblind: 1 } }, right: { effects: { order: 1, morale: -2 } } },
  { id: 'survivor-patches', layer: 1, left: { effects: { morale: 3, order: -1 } }, right: { effects: { order: 1, morale: -2 } } },
  { id: 'gift-norms', layer: 1, left: { effects: { order: 2, morale: -2 } }, right: { effects: { morale: 2, order: -2 } } },
  { id: 'camp-choir', layer: 1, left: { effects: { morale: 4 } }, right: { effects: { order: 2, morale: -3 } } },

  // ---------------- Yet more Snowblind / the world outside ----------------
  { id: 'shadow-count', layer: 2, left: { effects: { morale: 1, snowblind: -1 } }, right: { effects: { snowblind: 2 } } },
  { id: 'thaw-patch', layer: 2, left: { effects: { order: 1, snowblind: -2 } }, right: { effects: { morale: 2, snowblind: 2 } } },
  { id: 'quiet-convert', layer: 2, left: { effects: { order: 1, snowblind: -2, morale: -1 } }, right: { effects: { snowblind: 2 } } },
  { id: 'quota-forgotten', layer: 2, left: { effects: { order: 2, snowblind: -2 } }, right: { effects: { morale: 1, snowblind: 2 } } },
  { id: 'bird-that-stayed', layer: 2, left: { effects: { order: 1, snowblind: -1 } }, right: { effects: { morale: 2, snowblind: 2 } } },
  { id: 'same-dream-again', layer: 2, left: { effects: { order: 2, morale: -1, snowblind: -1 } }, right: { effects: { snowblind: 3 } } },
  { id: 'handwriting-match', layer: 2, left: { effects: { order: 2, snowblind: -2 } }, right: { effects: { snowblind: 2 } } },
  { id: 'cold-that-doesnt-bite', layer: 2, left: { effects: { order: 1, morale: -1, snowblind: -2 } }, right: { effects: { morale: 2, snowblind: 3 } } },
  { id: 'the-listening-room', layer: 2, left: { effects: { order: 2, snowblind: -2 } }, right: { effects: { snowblind: 3 } } },
  { id: 'childrens-count', layer: 2, left: { effects: { order: 1, snowblind: -1 } }, right: { effects: { morale: 1, snowblind: 3 } } },
  { id: 'the-unlit-lamp', layer: 2, left: { effects: { order: 2, supplies: -1, snowblind: -2 } }, right: { effects: { snowblind: 2 } } },
  { id: 'borrowed-words', layer: 2, left: { effects: { order: 1, morale: -1, snowblind: -2 } }, right: { effects: { snowblind: 2 } } },
  { id: 'the-full-roster', layer: 2, left: { effects: { order: 2, snowblind: -2 } }, right: { effects: { snowblind: 3 } } },
  { id: 'gate-tally', layer: 2, left: { effects: { order: 1, snowblind: -2 } }, right: { effects: { snowblind: 2 } } },
  { id: 'the-warm-welcome', layer: 2, left: { effects: { order: 2, supplies: -1, snowblind: -3 } }, right: { effects: { morale: 1, snowblind: 3 } } },
  { id: 'the-borrowed-face', layer: 2, left: { effects: { order: 1, morale: -1, snowblind: -2 } }, right: { effects: { morale: 1, snowblind: 2 } } },
  { id: 'the-patient-crowd', layer: 2, left: { effects: { order: 2, supplies: -1, snowblind: -2 } }, right: { effects: { snowblind: 3 } } },
  { id: 'the-shared-silence-two', layer: 2, left: { effects: { order: 1, morale: -1, snowblind: -2 } }, right: { effects: { snowblind: 3 } } },

  // ---------------- Legacy / veteran cards (unlocked after your first term ends) ----------------
  { id: 'legacy-memo', layer: 2, minRuns: 1, left: { effects: { order: 1, snowblind: -3, morale: -1 } }, right: { effects: { morale: 2, snowblind: 2 } } },
  { id: 'legacy-cat', layer: 1, minRuns: 1, left: { effects: { morale: 3, order: -1 } }, right: { effects: { order: 2, morale: -3 } } },
]

// Playtesting turned up a systematic authoring bias: across all 200 cards,
// `left` choices average Order +1.07 vs `right`'s +0.05, and `snowblind`
// skews positive on `right`. A coin-flip player drifts toward the tyranny
// ending almost every time as a result — not a per-card problem, so it's
// corrected here in aggregate rather than by hand-editing 200 literals.
function dampenBias(effects) {
  if (!effects) return effects
  const out = { ...effects }
  if (out.order > 0) out.order = Math.max(1, Math.round(out.order * 0.4))
  if (out.snowblind > 0) out.snowblind = Math.max(1, Math.round(out.snowblind * 0.7))
  return out
}

// Playtesting (real friends, not just simulated bots) showed mashing
// through cards without reading performed almost as well as reading
// carefully — every choice's swing was too small to matter. This scales
// up the (already bias-corrected) magnitudes so each pick has real
// weight: careless/random play now carries genuine risk of a bad run,
// while reading the current numbers and reacting still keeps you safer.
const IMPACT_SCALE = 1.7

function amplify(effects) {
  if (!effects) return effects
  const out = {}
  for (const key of Object.keys(effects)) {
    const scaled = effects[key] * IMPACT_SCALE
    out[key] = effects[key] > 0 ? Math.ceil(scaled) : Math.floor(scaled)
  }
  return out
}

export const cards = rawCards.map((c) => ({
  ...c,
  left: { ...c.left, effects: amplify(dampenBias(c.left.effects)) },
  right: { ...c.right, effects: amplify(dampenBias(c.right.effects)) },
}))
