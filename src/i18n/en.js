export const en = {
  code: 'en',
  label: 'EN',

  ui: {
    eyebrowStart: 'Year 9. The snow has not stopped since Year 1.',
    title: 'QuORuM',
    lede: 'You have been appointed Chairperson of the Shelter Committee. Nobody else wanted the job. Outside the wall, some of the missing have started coming back different.',
    takeChair: 'Take the Chair',
    next: 'Next',
    beginTerm: 'Begin Your Term',
    hintText: 'Swipe or tap a choice. Keep four numbers from hitting zero.',
    legacyChairperson: (n, prev) =>
      `Chairperson No. ${n}. ${prev} administration${prev === 1 ? '' : 's'} came before you.`,
    dayLabel: (n) => `Day ${n}`,
    termEnded: (n) => `Day ${n}. Your term has ended.`,
    nextChairperson: 'The Next Chairperson',
    milestoneTitle: 'You have survived to Year 10.',
    milestoneBody: 'The snow has not stopped. Neither has the agenda.',
    continue: 'Continue',
    meters: {
      morale: 'Morale',
      supplies: 'Supplies',
      order: 'Order',
      snowblind: 'Snowblind',
    },
  },

  codex: {
    stagesLabel: 'Stages',
    unitsLabel: 'Camp Layout',
    logLabel: 'Notes',
    logEmptyTitle: 'Note to Self',
    logEmptyBody: "Nothing worth writing down yet. Ask again once the term's had time to go somewhere.",
    logEntries: {
      'log-first-week': {
        title: 'Note to Self — One Week In',
        body: "Seven days as chairperson. I keep waiting to feel like I've grown into the job. Mostly I've just gotten faster at pretending I know what I'm doing before anyone notices I don't.\n\nThe forms make more sense than they did on day one, at least. That's something.",
      },
      'log-strain': {
        title: 'Note to Self — The Strain Is Showing',
        body: "I don't need the numbers to tell me things are stretched thin. I can see it in how people stand in the ration line now — closer together, but somehow further apart.\n\nEveryone's still doing their part. Nobody's smiling while they do it anymore.",
      },
      'log-grip-tightening': {
        title: 'Note to Self — Somewhere Along the Way',
        body: "I caught myself enjoying it today — someone hesitating before they argued with me, like it wasn't worth the trouble anymore. I didn't like how much I liked that.\n\nI don't remember deciding to run things this tightly. I don't remember deciding not to, either.",
      },
      'log-snowblind-rising': {
        title: 'Note to Self — I Believe Them Now',
        body: "I used to write the sightings off as stress, same as everyone before me probably did. I'm having a harder time doing that lately.\n\nI'm not writing down what changed my mind. Some things I'd rather not have in a file with my name on it.",
      },
      'log-piecing-together': {
        title: "Note to Self — It's Not Just Rumors Anymore",
        body: "I've stopped calling it a rumor in my own head, even if I still call it one out loud at meetings. There's a shape to it now. A pattern, if you line the pieces up, and I've lined up enough of them.\n\nI don't know yet if telling people helps or just gives the thing more room to spread. I keep meaning to decide. I keep not deciding.",
      },
      'log-final-stretch': {
        title: 'Note to Self — Sixty Days',
        body: "Sixty days. However this goes, it's supposed to resolve itself somewhere between now and thirty days from here — that's just how terms work, near as I've ever been told.\n\nI don't know if I believe that anymore. I don't know what I'd do differently if I didn't.",
      },
    },
    stagesPages: [
      {
        title: "Note to Self — on 'Stage 1'",
        body: "I've started keeping track, unofficially. The medic calls it 'Stage 1' now, and the name's stuck.\n\nIt starts small. Someone stops sleeping right. They stand at the window too long. They mention a dream about the snow, then laugh it off before you can ask what it was about.\n\nNothing to act on, really. Half the camp could probably be called Stage 1 on a bad week. Myself included, some nights.\n\nI only write it down because the next stage isn't as easy to laugh off.",
      },
      {
        title: "Note to Self — on 'Stage 2'",
        body: "This is where it stops being just bad sleep. They start saying it 'told them something' — never what, exactly. They're still themselves. Still show up for shifts. Still argue about the thermostat like anyone else.\n\nBut they've started listening to something I can't hear, and answering it, sometimes, mid-sentence.\n\nI try to check in when I notice it. Most of the time there's nothing more to say than 'get some rest.' I don't always believe myself when I say it.",
      },
      {
        title: "Note to Self — on 'Stage 3'",
        body: "This is the one the bylaws don't have a clean answer for.\n\nBy Stage 3 they're not just hearing it anymore — they want you to hear it too. Gently, at first. A conversation that circles back to the same idea. An invitation to 'just come listen, once.'\n\nIt spreads exactly the way a good sales pitch spreads: person to person, over evenings, over tea. That's what the whole circle turned into, before I made the call to shut it down. I still don't know if that was the right call. I know what happens if you don't make one.",
      },
      {
        title: "Note to Self — on 'Stage 4'",
        body: "By the time someone reaches this stage, there's usually nothing left to negotiate with. They stop hearing you the way they used to. Some go quiet and calm. A few get dangerous. Most, eventually, just walk out — not lost, not confused. Like they finally know exactly where they're going.\n\nI've signed the paperwork for more than one of those walk-outs by now. None of them asked me to stop them. I don't think I'd have known how, even if they had.",
      },
    ],
    unitsPages: [
      {
        title: 'Note to Self — Camp Layout',
        body: "Four blocks, lettered A through D, built into what used to be a distribution warehouse. Nobody remembers who assigned the letters. Each block holds a handful of Units — numbered rooms, really, though people talk about them like they're neighborhoods.\n\nBlock A: Units 1–4. Closest to the gate. Loudest block, always has been.\n\nBlock B: Units 5–8. Houses most of the families with young kids.\n\nBlock C: Units 9–12. Quietest block. Has been for a while now, for reasons I've written about elsewhere.\n\nBlock D: Units 13–16. Half-empty. Reserved, unofficially, for whoever's newest.\n\nI keep meaning to redraw the map properly. I never do.",
      },
    ],
  },

  intro: {
    pages: [
      "Nine years now since the snow stopped pretending it would ever let up. I don't remember what color the sky used to be when it wasn't white.\n\nMy mornings are all the same. Wake up in a cold you never actually get used to. Walk past the one window in the room, which only ever shows snow. Boil water for something that still gets called coffee, technically. Listen to the heater groan like it's dying, same as every morning. Then out to stand in the ration line, same as the last three thousand-some days.\n\nNobody talks about the old world anymore. It's stopped being a memory and started being a story people are tired of telling.",
      "I genuinely don't know how I ended up being the one. At the meeting where they picked the new chairperson, someone said a name, and I just — didn't raise my hand fast enough to object.\n\nEveryone else had better excuses. Kids to watch. A bad back. One flat refusal to ever have their name attached to responsibility again. Me, I was just too tired that day to argue.\n\nNow I'm the one who signs every form. Hears every complaint about somebody's shower running two minutes long. Rules on karaoke nights nobody actually cares about. And pretends four numbers I'm responsible for matter as much as I keep telling everyone they do.",
      "Morale. Supplies. Order. Keep those three balanced, or this camp eats itself from the inside before anything outside ever gets the chance.\n\nAnd past the wall, in all that white with no horizon left in it, something is gathering. Everyone's heard about it by now. Nobody wants to be the one who says it out loud first.\n\nAnyway. Let's see what's on the agenda today.",
    ],
  },

  gameOver: {
    mutiny: {
      title: 'Removed by Vote',
      message:
        'The committee turns on you, unanimously and extremely informally. You are escorted from your own office by two volunteers holding clipboards.',
    },
    starvation: {
      title: 'The Pantry Runs Out',
      message: 'The ledgers stop mattering. So does the agenda.',
    },
    anarchy: {
      title: 'Bylaws, Abandoned',
      message: 'Nobody follows the rules anymore. Not even the ones about how to change the rules.',
    },
    tyranny: {
      title: 'A Very Polite Coup',
      message: 'You enforced every bylaw to the letter. They vote you out at 3am, very politely, with a fruit basket.',
    },
    snowblind: {
      title: 'The Circle Does Not Meet in Secret Anymore',
      message: 'It does not need to. Most of the camp already agrees with it.',
    },
    'conclusion-holdout': {
      title: 'The Line Outside the Wall',
      pages: [
        "Day ninety. Nobody made a formal announcement — there wasn't one to make. The term just ran out, the way terms do, and the committee looked at me like they expected me to say something.\n\nI didn't have anything. Four numbers, mostly steady. A camp that's still standing, mostly upright. That was the whole report, if I'm honest with myself about it.\n\nEverybody else seemed satisfied with that. I keep waiting to feel the same.",
        "It's not a rumor anymore, by the way. I should probably have written that down somewhere official, but there isn't a form for it.\n\nPast the wall, in a line that doesn't end at the ridge — doesn't end anywhere I can see — they're standing. Not moving toward us. Not really moving at all. Just standing there, patient, the way the snow is patient, like they've got nowhere else they'd rather be and no particular hurry to get there.\n\nThe committee never voted on what to do about that. I'm not sure a vote would even mean anything to it.",
        "Somebody else takes the chair tomorrow. I already know I'll miss half the handoff meeting explaining things I never wrote down properly — which drawer the spare keys live in, why the thermostat argument between Block A and B is never actually about the thermostat.\n\nI won't tell them about the line outside the wall. They'll find out on their own, same as I did. That feels like the one piece of continuity this camp still has.\n\nMorale. Supplies. Order. I kept the numbers from hitting zero. Nobody asked me to keep anything else standing, so I suppose, on paper, I did the job.",
      ],
    },
    'conclusion-embraced': {
      title: 'Someone Opened the Gate',
      pages: [
        "Day ninety, or close enough that nobody's still counting exactly. I keep reaching for the ledger to write the number down out of habit, then remembering there's no one left to read it back to me.\n\nI used to think the job was four numbers. Morale, supplies, order, and whatever the fourth one was actually measuring, because I was never sure it was measuring what I called it.\n\nTurns out it was measuring exactly what I called it. I just didn't want to believe a number could mean that.",
        "No vote was called. That's the part I keep circling back to — not that it happened, but how quietly it happened. No memo. No meeting. By the time anyone thought to ask a question, half the committee was already outside the wall, walking, unhurried, like people finally allowed to stop pretending they didn't want to.\n\nThe line that used to wait out there isn't really outside anymore. I'm not sure 'outside' means the same thing it used to.\n\nI keep thinking someone should have stopped this. I keep coming back to the fact that I was someone.",
        "There's no handoff meeting this time. No next chairperson waiting in the wings, no spare keys to explain, no thermostat argument to inherit.\n\nI don't know if I'm writing this down for anyone, or just because writing things down is the last committee habit I've got left.\n\nMorale. Supplies. Order. Snowblind. Keep those balanced, I used to tell people, or the camp eats itself before anything outside gets the chance.\n\nI suppose I should have specified from which direction.",
      ],
    },
  },

  legacyFlavors: {
    circleShutDown: 'The last administration shut down the evening circle by force. People still whisper about why.',
    circleAllowed: 'The last administration let the evening circle meet in the open. No one likes to talk about how that ended.',
    karaokeBanned: 'Karaoke has been banned since the last administration. Nobody remembers the original reason anymore.',
    karaokeAllowed: 'Karaoke night survived the last administration. It is, against all odds, beloved.',
  },

  cards: {
    'water-quota': {
      text: 'Camp records show Unit 12 used their shower allocation twice this week.',
      left: 'Write them up — make an example of it',
      right: "Let it go this once, plenty of units are over some weeks",
    },
    'karaoke-night': {
      text: 'A resident group is petitioning for a weekly karaoke night. Singing carries far in the quiet after the snow.',
      left: 'Approve it',
      right: 'Deny it',
    },
    'bathroom-bylaw': {
      text: 'The bathroom queue order has three residents feuding hard enough that one wrote you a multi-page complaint.',
      left: 'Post a fixed rotation on the door',
      right: "Tell them to work it out between themselves",
    },
    'snack-theft': {
      text: 'Someone has been stealing extra ration bars from the pantry. Everyone has a theory about who.',
      left: 'Install a lock, treat it as solved',
      right: 'Handle it as a trust problem, not a security one',
    },
    'thermostat-war': {
      text: 'Block A and Block B are in open war over the shared thermostat setting.',
      left: 'Side with Block A',
      right: 'Side with Block B',
    },
    'committee-title': {
      text: "A resident wants their title changed from 'Assistant to Sanitation' to 'Director of Waste Strategy.'",
      left: 'Grant it',
      right: 'Deny it',
    },
    'newsletter-gossip': {
      text: 'The camp newsletter wants to run a gossip column. Circulation would double overnight.',
      left: 'Allow it, people could use the entertainment',
      right: 'Keep it out, it always turns on someone eventually',
    },
    'birthday-party': {
      text: 'Unit 7 wants to throw a birthday party using three days of sugar rations.',
      left: 'Allow it',
      right: 'Deny it',
    },
    'rigged-election': {
      text: "Someone's convinced the last committee seat vote was fixed — they keep pointing at the same two ballots.",
      left: 'Recount the ballots in front of them',
      right: "Tell them the seat isn't worth relitigating",
    },
    'pet-policy': {
      text: 'Someone smuggled a cat into camp. The rule has always been no pets — one more mouth to feed nobody signed off on. The cat is, unfortunately, very popular.',
      left: 'The rule stands. The cat goes',
      right: 'Let it stay, quietly, and hope it earns its keep',
    },
    'rename-camp': {
      text: "The youth committee wants to rename 'Camp Unity' to 'Camp Chaos Gang.' They already made merch.",
      left: 'Approve it',
      right: 'Reject it',
    },
    'noise-complaint': {
      text: "A formal complaint has been filed against a resident who 'breathes too loud' during meetings.",
      left: 'Log it formally, every complaint gets a record',
      right: "Decide some complaints don't need a paper trail",
    },
    'heating-budget': {
      text: 'The heating budget review is three weeks overdue. Nobody wants to do it.',
      left: 'Do it yourself, tonight',
      right: 'Delegate it to Committee B',
    },
    'sled-parking': {
      text: 'Two families are fighting over the same sled-parking spot near the gate.',
      left: 'Assign spots by lottery',
      right: 'Let them sort it out',
    },
    'potluck-signup': {
      text: "The potluck signup sheet has been 'mysteriously' rearranged three times this week.",
      left: 'Lock the signup sheet',
      right: "Ignore it, it's not that deep",
    },
    'memo-tone': {
      text: "Legal — the one resident who used to be a paralegal — says your memos are 'too aggressive.'",
      left: 'Soften the tone',
      right: 'Keep it direct',
    },
    anniversary: {
      text: "It's the anniversary of Year 1's first snowfall. Someone wants a moment of silence; someone else wants a party.",
      left: 'Moment of silence',
      right: 'Throw a small party',
    },
    'compost-manifesto': {
      text: 'The newly formed Compost Sub-Committee has submitted a 12-point manifesto.',
      left: 'Approve the manifesto',
      right: 'Reject it, politely',
    },
    'staring-snow': {
      text: "A resident from Unit 4 was found staring at the snow for six hours. Says they're 'fine now.'",
      left: 'Send them to rest',
      right: "Let it go, everyone's tired",
    },
    'shared-dream': {
      text: 'Three unrelated residents report the exact same dream about the snow last night.',
      left: 'Log it quietly, say nothing',
      right: 'Address it openly at town hall',
    },
    'evening-circle': {
      text: "A resident has started an 'evening circle' to discuss what the snow 'means.' Attendance is growing.",
      left: 'Shut it down',
      right: 'Let it continue',
    },
    'supply-run-sighting': {
      text: "A resident on the supply run insists they saw 'people out there, just standing, smiling.'",
      left: 'File it as stress',
      right: 'Increase gate watch',
    },
    'terminology-vote': {
      text: "The medic wants to stop saying 'Stage 4' out loud around camp. Suggests 'those who chose their path' instead.",
      left: 'Adopt the softer phrase',
      right: "Keep calling it what the medic's notes call it",
    },
    'exit-request': {
      text: "A Stage 4 resident has formally requested 'permission to walk out,' in writing, with a signature line.",
      left: 'Approve and file the paperwork',
      right: 'Deny it and confine them',
    },
    'greenhouse-collapse': {
      text: 'The greenhouse roof collapsed under new snow overnight. Half of it is unsalvageable.',
      left: 'Ration harder',
      right: 'Draw down the reserve',
    },
    'child-listening': {
      text: 'A child was found listening in on the evening circle. Their parents are furious — at you, somehow.',
      left: 'Ban children from the hall after dark',
      right: "It's fine, kids are curious",
    },
    'deputy-listening': {
      text: 'Your own deputy has started listening more than usual. They still do the job. For now.',
      left: 'Quietly reassign them',
      right: "Decide it's not worth confronting yet",
    },
    'gate-knocking': {
      text: 'Something knocked on the gate three times last night, evenly spaced, then stopped.',
      left: 'Reinforce the gate',
      right: "Don't mention it, avoid a panic",
    },
    'census-stage-box': {
      text: "The quarterly census form now includes a box for 'Stage,' self-reported. Someone has to approve the wording.",
      left: 'Approve self-reporting',
      right: 'Require a committee assessment instead',
    },
    'hall-request': {
      text: 'The evening circle has stopped meeting in secret. They have formally requested the main hall.',
      left: 'Grant the main hall',
      right: 'Refuse, permanently, post guards',
    },
    'legacy-memo': {
      text: "A memo from the previous administration reads: 'Do NOT approve the evening circle. We did. Ask us how that went.' There is no signature.",
      left: 'Heed the warning',
      right: 'Old paperwork means nothing now',
    },
    'legacy-cat': {
      text: 'A framed photo of a cat hangs in the committee office. No plaque. No explanation. Everyone salutes it out of habit.',
      left: 'Leave it be',
      right: 'Take it down, it is unprofessional',
    },

    'crisis-morale-noshows': {
      text: 'Attendance at committee meetings has collapsed. Half the seats have been empty for a week.',
      left: 'Make meetings mandatory',
      right: 'Cancel meetings for a while',
    },
    'crisis-morale-graffiti': {
      text: 'Someone scrawled something bitter across the noticeboard overnight. Unsigned.',
      left: 'Paint over it, say nothing',
      right: 'Leave it up, let people read it',
    },
    'crisis-morale-resign': {
      text: "One of your two deputies quietly asks to step down. Says they're just tired.",
      left: 'Spend the effort talking them into staying',
      right: 'Let them go, promote someone new',
    },
    'crisis-supplies-rationcut': {
      text: 'You have to announce another ration cut. The third this season.',
      left: 'Cut evenly, no exceptions',
      right: 'Cut less for units with children',
    },
    'crisis-supplies-blackmarket': {
      text: "Someone's running an unofficial trade in hoarded goods. Everyone knows. Nobody's said it out loud.",
      left: 'Shut it down',
      right: 'Let it keep running',
    },
    'crisis-supplies-huntparty': {
      text: 'A group wants to leave the wall for a day to hunt and forage further out than usual.',
      left: 'Allow it',
      right: 'Forbid it, too far, too risky',
    },
    'crisis-order-brawl': {
      text: 'A fight broke out over the chore rotation. Actual fists.',
      left: 'Punish both sides, publicly',
      right: 'Quietly separate them, no punishment',
    },
    'crisis-order-ignoredmemo': {
      text: "Nobody read your last three memos. Nobody's pretending to anymore.",
      left: 'Read the next one aloud, in full, at the meeting',
      right: 'Stop writing memos, just talk to people',
    },
    'crisis-order-curfew': {
      text: "Half the camp is openly ignoring curfew now. It isn't even a secret.",
      left: 'Post more watch shifts',
      right: 'Quietly move curfew later',
    },
    'crisis-tyranny-rulecount': {
      text: 'Someone counted forty-one active bylaws out loud at a meeting, as a joke. Nobody laughed.',
      left: 'Add a forty-second, banning the joke',
      right: 'Repeal a few, as a gesture',
    },
    'crisis-tyranny-petition': {
      text: "A petition is quietly circulating, asking for 'a normal amount of rules.'",
      left: 'Confiscate it',
      right: 'Read it. Actually consider it.',
    },
    'crisis-tyranny-silentshift': {
      text: 'People have started agreeing with you a little too fast, a little too often, lately.',
      left: 'Take the agreement at face value',
      right: 'Deliberately loosen your grip',
    },
    'crisis-snowblind-opentalk': {
      text: "People are discussing 'Stage' openly now, over meals, like the weather.",
      left: 'Discourage the talk',
      right: "Let them talk, it's just talk",
    },
    'crisis-snowblind-volunteers': {
      text: "Three residents volunteered, unprompted, to 'help watch the gate from outside.'",
      left: 'Refuse them',
      right: 'Allow it, extra eyes help',
    },
    'crisis-snowblind-silence': {
      text: 'Meetings have started with everyone quiet for a moment before anyone speaks. Nobody scheduled that.',
      left: 'Break the habit, start talking immediately',
      right: 'Let the silence happen',
    },

    'lore-first-whisper': {
      text: "A rumor is going around in tight little circles: something out on the snow was 'born.' No two people agree on the story.",
      left: 'Ask around, hear the different versions',
      right: 'Tell people to stop spreading rumors',
    },
    'lore-origin-rock': {
      text: 'One version of the story: it came from snow striking an ancient cliff face, high on the old mountain.',
      left: "Repeat this version — it's oddly convincing",
      right: 'Dismiss it as superstition',
    },
    'lore-origin-drift': {
      text: 'Another version: nine years of snowdrift finally piled high enough to think, and thinking, became someone.',
      left: 'Admit this one gives you a chill',
      right: 'Call it nonsense and move on',
    },
    'lore-origin-awake': {
      text: 'A third version: an ordinary person, one day, simply woke up and stopped seeing anything but white — and kept walking anyway.',
      left: 'Let this version spread, it feels closest to true',
      right: 'Refuse to repeat it',
    },
    'lore-follower-count': {
      text: "Word says the 'Himmavats' now number in the hundreds, somewhere out past the ridge.",
      left: 'Send someone to check, quietly',
      right: "Assume the number's exaggerated",
    },
    'lore-convert-offer': {
      text: "A trader passing near the wall says the Himmavats aren't hostile — yet. Just asking, politely, for people to join.",
      left: 'Let residents hear the offer for themselves',
      right: 'Keep it from spreading further',
    },
    'lore-thousand-strong': {
      text: 'The count jumps overnight: not hundreds anymore. Thousands, supposedly, moving slowly, in no particular hurry.',
      left: 'Take it seriously, prepare the defenses',
      right: 'Refuse to panic the camp over a rumor',
    },
    'lore-watch-doubled': {
      text: 'With the watch doubled, someone swears they saw a long line of torches out past the treeline, moving.',
      left: 'Log it, stay calm',
      right: 'Sound a full alert',
    },
    'lore-false-calm': {
      text: 'Staying calm worked, mostly — until a child asked, at dinner, why the grown-ups keep looking at the wall.',
      left: 'Answer the child honestly, in front of everyone',
      right: "Change the subject, it isn't the time",
    },
    'lore-camp-fell': {
      text: 'A runner arrives, half-frozen, barely coherent. Says they are from a shelter three ridges over. Says it is not there anymore.',
      left: 'Take them in, hear the whole story',
      right: 'Hold them at the gate, verify first',
    },
    'lore-the-pattern': {
      text: 'Piecing it together: this is not the first shelter the Himmavats reached. It may not be the last before this one.',
      left: "Tell the committee plainly what you've pieced together",
      right: 'Keep it to yourself, for now',
    },
    'lore-gate-visitor': {
      text: 'Someone in plain clothes stood at the gate for an hour this morning. Did not knock. Just stood there, facing the camp, until they walked back into the white.',
      left: 'Post extra watch from now on',
      right: 'Decide it was probably nothing',
    },
    'lore-the-hum': {
      text: 'More than one person has mentioned hearing something at night lately. Not words. Something like a hum, or singing, very far off.',
      left: 'Ask around, see if others hear it too',
      right: 'Tell people to get more sleep',
    },
    'lore-empty-camps': {
      text: 'A supply run team returns early, shaken. They passed two other shelters. Both empty. Doors open. No sign of a struggle.',
      left: 'Tell the whole camp what they saw',
      right: 'Keep it to the committee, for now',
    },
    'lore-the-invitation': {
      text: "A folded note was found tucked into the gate mechanism this morning. No footprints lead to it. It reads, simply: 'There's room.'",
      left: "Burn it, don't let it spread",
      right: 'Post it publicly, people should know',
    },

    'ledger-discrepancy': {
      text: "The storekeeper's ledger doesn't add up by a small amount. Probably nothing.",
      left: 'Ask the storekeeper quietly to explain',
      right: 'Order a formal audit',
    },
    'ledger-quiet-followup': {
      text: "The storekeeper's explanation didn't quite sit right. Small shortages keep turning up.",
      left: "Decide it's not worth the confrontation over small amounts",
      right: 'Bring in a second person to co-sign the ledger from now on',
    },
    'ledger-audit-result': {
      text: 'The audit finds real numbers missing. The storekeeper resigns before you can even ask.',
      left: 'Accept the resignation quietly',
      right: 'Announce the findings publicly, as a warning',
    },
    'ledger-second-offender': {
      text: 'A second person has been caught skimming from the stores.',
      left: 'Same punishment as last time, no exceptions',
      right: 'Handle this one differently',
    },
    'radio-static': {
      text: "An engineer thinks they can coax the old radio equipment back to life. Says they're already hearing something through the static.",
      left: 'Approve the repair',
      right: 'Not worth the parts',
    },
    'radio-first-contact': {
      text: "The radio crackles to life. A voice, another camp, three weeks' walk south. They say they're doing okay. For now.",
      left: "Share your camp's real situation",
      right: "Talk up your camp's strength a little",
    },
    'radio-trade-offer': {
      text: 'The southern camp offers a trade — supplies for something you apparently have plenty of.',
      left: 'Accept the trade',
      right: 'Decline, too risky to reveal your supply routes',
    },
    'radio-warning': {
      text: "The southern camp radios in, urgent and fast — they say they've heard the same rumors you have. Then the line goes dead mid-sentence.",
      left: 'Try to raise them again, all night if you have to',
      right: "Log it and move on, there's nothing else to do",
    },

    'laundry-rotation': {
      text: 'The laundry rotation schedule is being contested again. This is the fourth revision this month.',
      left: 'Lock the schedule, no more changes',
      right: 'Let people trade slots freely',
    },
    'school-lessons': {
      text: "A resident wants to teach the camp's kids reading lessons twice a week, using committee time to organize it.",
      left: 'Approve it',
      right: 'Suggest evenings instead',
    },
    'medicine-shortage': {
      text: "The medicine cabinet is down to painkillers and not much else. Someone has to decide who gets what's left.",
      left: 'Reserve it for emergencies only',
      right: 'Let the camp medic decide case by case',
    },
    'generator-fuel': {
      text: 'Fuel for the generator is running low. Someone has to decide which hours still get power.',
      left: 'Cut power overnight',
      right: 'Cut power during the day instead',
    },
    'mail-system': {
      text: "Someone's proposing an internal mail system between blocks — runners carrying folded notes.",
      left: 'Approve it',
      right: 'Call it a waste of manpower',
    },
    'funeral-rites': {
      text: "The ground's frozen solid. The committee has to decide how to handle burials until spring, if spring comes.",
      left: 'Build an aboveground vault',
      right: "Cremate, it's faster and cheaper",
    },
    'camp-currency': {
      text: "A group of residents started using bottle caps as informal currency. It's spreading fast.",
      left: 'Recognize it officially',
      right: "Ban it, rations aren't a market",
    },
    'wall-mural': {
      text: 'Someone painted a large mural on the mess hall wall overnight. Uncommissioned. People like it.',
      left: 'Leave it up',
      right: 'Paint over it, unauthorized is unauthorized',
    },
    'library-rationing': {
      text: "The camp's one bookshelf has a two-week waitlist. Someone wants a stricter checkout limit.",
      left: 'Limit to one book per person',
      right: 'Leave it as-is, people work it out',
    },
    'dress-code': {
      text: "A committee member proposes a standard camp uniform, 'for morale and equality.'",
      left: 'Adopt it',
      right: 'Reject it, let people wear what they have',
    },
    'shift-trading': {
      text: 'An unofficial market for trading work shifts has sprung up, people paying each other in favors and goods to swap.',
      left: 'Formalize it with a sign-up board',
      right: 'Ban informal trading',
    },
    'tool-checkout': {
      text: 'Tools keep vanishing from the shared shed. Someone wants a strict checkout log.',
      left: 'Implement the log',
      right: "Trust people, it's not worth the hassle",
    },
    'scrap-metal': {
      text: 'A resident is collecting scrap metal from the ruined structures nearby. Could be useful. Could be dangerous to gather.',
      left: 'Fund the effort',
      right: 'Not worth the risk',
    },
    'camp-court': {
      text: "Residents want a formal 'camp court' for settling disputes instead of bringing everything to the committee.",
      left: 'Establish it',
      right: 'Keep disputes with the committee',
    },
    'stray-dog': {
      text: "A stray dog has been hanging around the gate for days. Someone's already named it.",
      left: 'Let it stay',
      right: 'Chase it off before it draws trouble',
    },
    'music-hour': {
      text: "Someone wants a weekly 'music hour' over the camp's one working speaker.",
      left: 'Approve it',
      right: 'Not worth the power draw',
    },
    'language-class': {
      text: 'A resident who speaks three languages offers to teach a weekly class, unpaid.',
      left: 'Encourage it',
      right: 'Ask people to focus on survival skills instead',
    },
    'elder-seat': {
      text: "The camp's elders want a guaranteed seat on the committee, not just an advisory role.",
      left: 'Grant it',
      right: 'Keep the committee elected, not appointed',
    },
    'hazard-pay': {
      text: 'Night shift workers want extra rations as hazard pay. The night shift, they point out, is colder.',
      left: 'Grant hazard rations',
      right: 'Deny it, rations are rations',
    },
    'holiday-calendar': {
      text: 'A dispute over which pre-collapse holidays the camp should still observe has gotten surprisingly heated.',
      left: 'Keep the old calendar',
      right: 'Start a new camp calendar from Year 1',
    },
    'shovel-duty': {
      text: 'Snow-shoveling duty is unevenly distributed. The same dozen people do it every time.',
      left: 'Mandate rotation',
      right: 'Pay volunteers extra rations instead',
    },
    'boot-repair': {
      text: 'The boot repair queue is three weeks long. People are patching their own boots badly in the meantime.',
      left: 'Prioritize by need',
      right: 'First come, first served, no exceptions',
    },
    'blanket-count': {
      text: 'A blanket count reveals a shortfall. Someone has to decide who goes without until more are made.',
      left: 'Prioritize the elderly and children',
      right: 'Distribute evenly, thinner blankets for everyone',
    },
    'tobacco-ration': {
      text: 'The last of the tobacco is nearly gone. People are already anxious about it.',
      left: 'Ration what\'s left evenly',
      right: 'Auction the last of it for extra ration credits',
    },
    'gambling-ring': {
      text: 'An underground card-game ring has formed, betting ration credits. Technically against bylaws.',
      left: 'Shut it down',
      right: "Let it be, it's harmless",
    },
    'tattoo-trend': {
      text: "Younger residents have started giving each other stick-and-poke tattoos marking their 'stage' status, as a joke. Some on the committee don't find it funny.",
      left: 'Discourage it publicly',
      right: 'Let it be, kids need some kind of outlet',
    },
    'baby-naming': {
      text: "A newborn's parents want the committee's blessing for an unusual name, as camp tradition asks.",
      left: 'Approve it',
      right: 'Suggest something more traditional',
    },
    'flag-redesign': {
      text: "A youth group wants to redesign the camp's flag. The current one is, by their own words, 'depressing.'",
      left: 'Hold a vote on new designs',
      right: 'Keep the original',
    },
    'snowball-tournament': {
      text: "Someone's organizing a snowball fight tournament, bracket and all.",
      left: 'Endorse it officially',
      right: 'Discourage it, seems undignified given everything',
    },
    'theater-night': {
      text: "A group wants to put on a small play in scrap costumes for a 'theater night.'",
      left: 'Allow it',
      right: 'Say resources are better spent elsewhere',
    },
    'minutes-typo': {
      text: "Last week's committee minutes had a typo that accidentally implied a new bylaw. People have started following it anyway.",
      left: 'Issue a correction',
      right: 'Quietly make it the real bylaw now',
    },
    'seating-chart': {
      text: "Someone's proposed an assigned seating chart for the mess hall, 'to reduce clique tension.'",
      left: 'Implement it',
      right: 'Leave seating open',
    },
    'greenhouse-expansion': {
      text: 'There\'s a proposal to expand the greenhouse using materials salvaged from an empty block.',
      left: 'Approve the expansion',
      right: 'Too risky to repurpose housing materials',
    },
    'water-filter': {
      text: "The water filtration system needs a part that doesn't exist here anymore. Someone has a risky workaround.",
      left: 'Try the workaround',
      right: 'Ration filtered water until a real fix turns up',
    },
    'generator-noise': {
      text: "The generator's new patch job makes it louder. Residents nearby can't sleep.",
      left: 'Move the affected residents to another block',
      right: 'Tell them to bear with it',
    },
    'literacy-class': {
      text: 'Several adult residents quietly ask for basic literacy lessons, embarrassed to ask in open meeting.',
      left: 'Set it up discreetly',
      right: 'Announce it publicly, to normalize it',
    },
    'newspaper-editor': {
      text: 'The camp newsletter needs a new editor. Two people want the job for very different reasons.',
      left: 'Pick the more experienced one',
      right: 'Pick the one people actually like',
    },
    'mascot-costume': {
      text: "Someone made a costume for the camp's stray dog mascot. It's objectively ridiculous. Morale seems to like it.",
      left: 'Let it happen',
      right: 'Gently discourage it',
    },
    'id-badges': {
      text: 'A proposal to redesign camp ID badges with photos and stage-status color-coding is on the table.',
      left: 'Approve the redesign',
      right: 'Keep the current plain badges',
    },
    'coffee-stash': {
      text: 'A resident found an old, sealed stash of real coffee in a supply crate. Word is already spreading.',
      left: 'Ration it out to everyone, a cup each',
      right: 'Save it for committee use',
    },
    'card-tournament': {
      text: 'A camp-wide card game tournament is being planned, with rations as the prize pool.',
      left: 'Approve it',
      right: "Rations shouldn't be gambled, even for fun",
    },
    'mirror-shortage': {
      text: "There's exactly one mirror in camp, in the medic's office. People are quietly upset about it.",
      left: 'Ask residents to salvage more',
      right: 'Call it a minor issue',
    },
    'diary-privacy': {
      text: "A committee member found and read a resident's diary while cleaning a shared space. It's caused real anger.",
      left: 'Formally reprimand them',
      right: 'Let it blow over quietly',
    },
    'snow-sculpture': {
      text: "Someone wants to organize a snow sculpture contest. There's no shortage of raw material, at least.",
      left: 'Approve it',
      right: 'Call it a waste of energy people should save',
    },
    'term-limits': {
      text: "Someone's floated the idea that no chairperson should hold the seat past two terms — including you, currently on your first.",
      left: 'Agree, write it into the handbook',
      right: 'Say the camp needs steady hands more than fresh ones right now',
    },

    'frostbite-miracle': {
      text: 'A resident with severe frostbite recovered overnight, completely, with no scarring. The medic has no explanation.',
      left: 'Log it as a medical anomaly',
      right: 'Keep it quiet, no need for questions',
    },
    'compass-spin': {
      text: "Every compass in camp has started drifting slowly toward the same point outside the wall. It isn't magnetic north.",
      left: 'Collect and store the compasses',
      right: 'Ignore it, nobody uses compasses for much anyway',
    },
    'shared-humming': {
      text: "A group of children have started humming the same unfamiliar tune. None of them can say where they learned it.",
      left: 'Ask the children directly',
      right: 'Assume they picked it up from each other',
    },
    'footprints-in': {
      text: 'Fresh footprints were found leading into camp this morning, not out. No one has come forward.',
      left: 'Investigate quietly, unit by unit',
      right: "Assume it's an early riser and move on",
    },
    'missing-reappear': {
      text: 'A resident who walked out six months ago, presumed lost, was seen standing just outside the gate yesterday. Watching.',
      left: 'Approach and try to talk to them',
      right: 'Keep your distance, report it and nothing else',
    },
    'warm-spot': {
      text: "There's a patch of ground near the east wall where snow won't settle anymore. Just bare, dark earth.",
      left: 'Fence it off',
      right: "Let people use it, it's oddly comfortable to sit near",
    },
    'dream-map': {
      text: 'Three separate residents have now drawn nearly identical maps from dreams, showing a route none of them have walked.',
      left: 'File the maps away, unremarkable',
      right: 'Compare them carefully for anything useful',
    },
    'silent-vote': {
      text: 'During a routine vote, nearly everyone raised their hands in perfect unison, half a second before you finished asking.',
      left: 'Note it, move on',
      right: 'Ask people directly if something\'s wrong',
    },
    'new-language': {
      text: 'Two Stage 2 residents have started communicating in a language nobody recognizes. They seem to understand each other fine.',
      left: 'Separate them for observation',
      right: 'Let them be, probably just a private joke',
    },
    'snow-angel': {
      text: 'Children have been making snow angels in a very specific, identical pattern across the whole camp, without coordinating.',
      left: 'Ask around about it',
      right: "It's just a game kids are copying",
    },
    'missing-hour': {
      text: 'Camp clocks all lost exactly the same hour last night. No one can account for where it went.',
      left: 'Reset the clocks and move on',
      right: 'Ask if anyone remembers anything from that hour',
    },
    'gate-flowers': {
      text: 'Fresh flowers, a species nobody recognizes, blooming despite the cold, were found arranged neatly at the gate this morning.',
      left: 'Remove and dispose of them',
      right: "Leave them, it's been a hard week",
    },
    'echo-voice': {
      text: 'Someone reports hearing their own voice repeated back to them, half a second delayed, while alone outside.',
      left: 'Advise against going outside alone',
      right: 'Chalk it up to wind and acoustics',
    },
    'counted-twice': {
      text: 'The morning headcount came up one higher than the resident roster. By evening, it matched again.',
      left: 'Recount carefully, cross-check names',
      right: 'Assume a counting error',
    },
    'warmth-offer': {
      text: "A Stage 3 resident sincerely offers to teach others 'how to stop being cold, for good.' Several people are interested.",
      left: 'Forbid the lessons',
      right: 'Let a few people attend, out of curiosity',
    },
    'reflection-lag': {
      text: "Someone notices their reflection in the ice-glazed window moved a beat slower than they did. They've only mentioned it to you.",
      left: 'Take it seriously, tell them to rest',
      right: "Tell them it's exhaustion playing tricks",
    },
    'shared-name': {
      text: 'Two unrelated residents have started introducing themselves with the same new name. Neither remembers deciding to.',
      left: 'Ask them about it directly, together',
      right: "Assume it's a coincidence",
    },
    'still-air': {
      text: 'For one full hour yesterday, the snowfall stopped completely and the air went dead calm, for the first time in nine years. Then it resumed like nothing happened.',
      left: 'Record it carefully, in case it happens again',
      right: "Enjoy the quiet, don't make it a whole thing",
    },
    'borrowed-warmth': {
      text: "Rooms near the wall have started staying strangely warm, more than the heaters could account for. Nobody's complaining, exactly.",
      left: 'Investigate the heat source',
      right: 'Let people enjoy the warm rooms',
    },
    'unlabeled-grave': {
      text: 'A fresh, small, neatly-dug grave was found outside the wall this morning. No one in camp is missing. No one claims to have dug it.',
      left: 'Report it to the whole camp',
      right: 'Keep it between the committee, for now',
    },

    'crisis-morale-quietquitting': {
      text: "People are still doing their assigned tasks, technically. But nobody's doing anything extra anymore. The difference is obvious.",
      left: "Call a meeting, ask what's wrong",
      right: "Decide morale dips aren't worth chasing individually",
    },
    'crisis-morale-emptychair': {
      text: "A committee seat has sat empty for two weeks. Nobody's volunteering to fill it anymore.",
      left: 'Appoint someone whether they want it or not',
      right: 'Leave it empty, run the committee lean',
    },
    'crisis-supplies-thinsoup': {
      text: "Dinner has been the same thin soup for eight days straight. People aren't complaining out loud. Yet.",
      left: 'Dip further into the emergency reserve',
      right: 'Hold the line, reserves stay reserves',
    },
    'crisis-supplies-countlies': {
      text: 'You suspect at least one unit is under-reporting their stockpile to dodge the next cut.',
      left: 'Order inspections',
      right: "Let it go, everyone's just trying to survive",
    },
    'crisis-order-twoleaders': {
      text: "A second, unofficial 'committee' has started meeting in Block C, making its own decisions.",
      left: "Shut it down, there's only one committee",
      right: 'Invite them to merge with the real one',
    },
    'crisis-order-nobodyshows': {
      text: 'The last three scheduled work shifts had nobody show up at all. Chores are piling up.',
      left: 'Make attendance mandatory, with penalties',
      right: 'Ask for volunteers instead, no penalties',
    },
    'crisis-tyranny-uniformagreement': {
      text: 'Every vote this month has passed unanimously. Even the ones you expected pushback on.',
      left: 'Take it as a sign things are working',
      right: 'Deliberately introduce a controversial proposal, to test the waters',
    },
    'crisis-tyranny-fearreport': {
      text: 'A resident admits, quietly, that people are afraid to disagree with committee decisions anymore.',
      left: "Tell them the rules are working exactly as intended",
      right: 'Loosen enforcement, see if the fear was the rules',
    },
    'crisis-snowblind-mapdrawing': {
      text: "Someone's been drawing the same symbol on walls around camp. Nobody admits to it. Nobody's stopped it either.",
      left: 'Have it scrubbed off wherever it appears',
      right: "Leave it, it's harmless decoration",
    },
    'crisis-snowblind-emptyseats': {
      text: 'Attendance at committee meetings is fine. But more and more people sit facing the window instead of the room.',
      left: 'Rearrange the seating to face away from the window',
      right: 'Let people sit where they\'re comfortable',
    },

    'apprentice-missing': {
      text: "One of the apprenticeship program's teens didn't show up for their shift. Or the one after.",
      left: 'Organize a search party',
      right: "Wait a day, they've probably just overslept",
    },
    'apprentice-found': {
      text: "They're found — cold, shaken, but alive, a mile past the tree line. They won't say what they were doing out there.",
      left: "Give them space, don't push",
      right: 'Press them for an answer',
    },
    'apprentice-aftermath': {
      text: "The apprentice asks to be reassigned, away from outdoor work. They won't say why. You don't press.",
      left: 'Approve the reassignment',
      right: 'Ask them to stick with their original post',
    },

    'chess-club': {
      text: 'A chess club has formed and is now, unofficially, the most contested social hierarchy in camp.',
      left: 'Host an official tournament',
      right: 'Let it stay informal',
    },
    'sign-language': {
      text: "A resident who's deaf proposes basic sign language lessons for the whole camp.",
      left: 'Approve it, mandatory for staff roles',
      right: 'Approve it, optional for anyone interested',
    },
    'anthem-contest': {
      text: "A contest for new camp anthem lyrics has produced twelve entries. All of them, somehow, rhyme 'snow' with 'go.'",
      left: 'Pick one and move on',
      right: 'Extend the contest for better entries',
    },
    'spirit-day': {
      text: "Someone proposes a monthly 'spirit day' with themed dress-up, to break the monotony.",
      left: 'Approve it',
      right: 'Say it trivializes the situation',
    },
    'glass-recycling': {
      text: 'A resident wants to start melting down glass bottles for repairs and tools.',
      left: 'Fund the project',
      right: 'Not a priority right now',
    },
    'dorm-space': {
      text: 'Complaints about personal space in the shared dorms have reached the committee, again.',
      left: 'Redraw the space allocation',
      right: 'Tell people to work it out among themselves',
    },
    'unit-conversion': {
      text: 'A surprisingly heated argument broke out over whether official documents should use Celsius or Fahrenheit.',
      left: 'Standardize on Celsius',
      right: 'Standardize on Fahrenheit',
    },
    'nightlight-policy': {
      text: "Parents are split on whether the children's dorm should keep a night-light on, given the cost of power.",
      left: 'Keep it on',
      right: 'Turn it off to save power',
    },
    'barber-apprentice': {
      text: "The camp's one barber wants to train an apprentice, using committee time for the lessons.",
      left: 'Approve it',
      right: 'Suggest they train off the clock',
    },
    'bathroom-cleaning': {
      text: "The bathroom cleaning rotation chart has gone missing. Nobody's cleaned in four days.",
      left: 'Redraw it and enforce it strictly',
      right: 'Ask for volunteers this once',
    },
    'knock-etiquette': {
      text: 'A dispute over whether people should knock before entering shared spaces has escalated further than it should have.',
      left: 'Issue a formal knocking policy',
      right: 'Tell people to use common sense',
    },
    'archive-storage': {
      text: "The committee's paper archive is taking up an entire room that could house two more residents.",
      left: 'Digitize and shred the originals',
      right: 'Keep the physical archive, find space elsewhere',
    },
    'lock-master-list': {
      text: "Nobody knows who holds which keys anymore. A master list is overdue.",
      left: 'Compile it, mandatory key check-in',
      right: 'Let people keep their keys, trust the system',
    },
    'countdown-display': {
      text: "Someone put up a hand-painted sign counting the days since the snow started. It's oddly popular. And oddly grim.",
      left: 'Leave it up',
      right: 'Take it down, too bleak',
    },
    'lost-and-found': {
      text: "The lost and found box hasn't been sorted in months and is now just called 'the box.'",
      left: 'Assign someone to sort it weekly',
      right: 'Leave it, people find what they need eventually',
    },
    'special-diet': {
      text: 'A handful of residents with dietary restrictions ask for separate meal preparation.',
      left: 'Accommodate it',
      right: "Say the kitchen can't handle separate menus",
    },
    'found-instruments': {
      text: 'A group found enough instruments in a ruined music shop to form a small band.',
      left: 'Let them practice in the mess hall evenings',
      right: 'Find them a smaller, less central space',
    },
    'snow-globe': {
      text: "Someone found an intact snow globe in the ruins. It's become a strange, quiet obsession for a few residents.",
      left: 'Let it be, harmless comfort',
      right: "Gently suggest it's a bit much",
    },
    'weather-contest': {
      text: 'A betting pool has formed on which day the snow will finally stop. Rations are the stakes.',
      left: 'Allow it, morale needs the hope',
      right: 'Shut it down, false hope helps no one',
    },
    'self-defense': {
      text: 'A resident with a martial arts background offers to teach self-defense classes.',
      left: 'Approve it',
      right: 'Say it might raise unnecessary alarm',
    },
    'fire-watch': {
      text: "The camp needs volunteer fire watch shifts overnight. Nobody's thrilled about it.",
      left: 'Make it mandatory, rotating',
      right: 'Offer extra rations for volunteers',
    },
    'camp-museum': {
      text: "A resident has started collecting pre-collapse objects into a small 'museum' corner. People visit more than expected.",
      left: 'Give it official space',
      right: 'Say space is too tight for a museum',
    },
    'seed-vault': {
      text: "The greenhouse's seed reserve needs a dedicated, secure storage upgrade.",
      left: 'Fund the upgrade',
      right: 'Current storage is fine for now',
    },
    'skating-rink': {
      text: 'Someone wants to flood and freeze a section of open ground into a skating rink.',
      left: 'Approve it',
      right: "Water's too precious for that",
    },
    'debate-club': {
      text: 'A debate club has formed, and its favorite topic lately is committee decisions. Yours, specifically.',
      left: 'Attend one of their sessions',
      right: 'Politely decline, too close to the job',
    },
    'silent-auction': {
      text: 'A silent auction for salvaged pre-collapse goods is being proposed, rations as currency.',
      left: 'Approve it',
      right: "Rations shouldn't fund a hobby auction",
    },
    'apprentice-program': {
      text: 'A formal apprenticeship program pairing teens with skilled workers is on the table.',
      left: 'Launch it',
      right: 'Not enough skilled workers to spare the time',
    },
    'chair-ration': {
      text: "A committee member suggests the chairperson should get a small extra ration, 'for the workload.'",
      left: 'Accept it',
      right: 'Refuse it publicly',
    },
    'elder-retirement': {
      text: 'An elderly committee member quietly asks to retire from their seat. They look relieved just asking.',
      left: 'Let them go, thank them publicly',
      right: 'Ask them to stay just a bit longer',
    },
    'orphan-placement': {
      text: 'An orphaned child needs a family. Two families both want to take her in.',
      left: 'Let the families decide between themselves',
      right: 'Make the call yourself, based on capacity',
    },
    'camp-motto': {
      text: "A contest for a new camp motto produced one clear winner: 'We're Still Here.' Some find it inspiring. Some find it bleak.",
      left: 'Adopt it officially',
      right: 'Ask for a less grim option',
    },
    'survivor-patches': {
      text: 'Someone proposes cloth patches marking how many years a resident has survived here, worn on sleeves.',
      left: 'Approve it',
      right: 'Say it invites unhealthy comparison',
    },
    'gift-norms': {
      text: 'An argument broke out over whether gift-giving during the holidays should be rationed or left to individual choice.',
      left: 'Ration gift materials evenly',
      right: 'Leave it to individual choice',
    },
    'camp-choir': {
      text: 'A choir has formed and wants to perform at the next town hall meeting.',
      left: 'Let them perform',
      right: 'Keep town hall meetings business-only',
    },

    'shadow-count': {
      text: "A resident swears their shadow moved independently for a moment this morning, in bright, flat daylight.",
      left: 'Suggest they rest, log it privately',
      right: 'Laugh it off in front of others',
    },
    'thaw-patch': {
      text: 'Ice on the inside of a window formed a pattern that looks, unmistakably, like a face. Kids keep visiting it.',
      left: 'Scrape it off',
      right: 'Leave it, kids like it',
    },
    'quiet-convert': {
      text: "A resident who was firmly against 'all this Snowblind talk' has gone suspiciously quiet on the subject lately.",
      left: 'Check in with them directly',
      right: 'Assume they just got tired of arguing',
    },
    'quota-forgotten': {
      text: 'For the first time in years, nobody mentioned rations at all during a full committee meeting. Not once.',
      left: 'Bring it up yourself, deliberately',
      right: 'Let the meeting run its course',
    },
    'bird-that-stayed': {
      text: "A single bird has been seen near the wall for three straight days. There haven't been birds in years.",
      left: 'Have someone watch it, report changes',
      right: "Enjoy it, don't overthink a bird",
    },
    'same-dream-again': {
      text: "The dream about the mountain is spreading. Now it's not just three residents — it's closer to a dozen.",
      left: 'Address it openly, ask who else has had it',
      right: "Stop tracking it, it's just a rumor mill now",
    },
    'handwriting-match': {
      text: 'Two notes, written a week apart by different residents, turn out to be in identical handwriting. Neither resident can explain it.',
      left: 'Question both residents carefully',
      right: 'File it as an odd coincidence',
    },
    'cold-that-doesnt-bite': {
      text: "Several residents mention that the cold 'doesn't feel like cold anymore.' They don't say it like a complaint.",
      left: 'Have the medic check on them',
      right: 'Take it as good news, nothing to fix',
    },
    'the-listening-room': {
      text: 'A room nobody uses has started collecting furniture, arranged in a circle, by no one who admits to doing it.',
      left: 'Clear the room out',
      right: 'Leave the furniture, see who uses it',
    },
    'childrens-count': {
      text: "The children have started a counting game — reciting numbers together, perfectly synced — that doesn't match any game the adults recognize.",
      left: 'Ask the children to explain the game',
      right: "It's just a kids' game, let it be",
    },
    'the-unlit-lamp': {
      text: 'One lamp near the wall keeps being found unlit, wick trimmed neatly, every single morning, no matter who lit it the night before.',
      left: 'Post a watch on it overnight',
      right: "Just relight it each morning, not worth the fuss",
    },
    'borrowed-words': {
      text: "A resident has started using phrases in conversation that nobody taught them, in a cadence that isn't quite their own.",
      left: 'Gently ask where they picked it up',
      right: "People pick up habits, it's nothing",
    },
    'the-full-roster': {
      text: 'For one strange morning, the resident roster listed everyone who has ever lived in camp — including those who left, and those who died.',
      left: 'Correct the roster immediately',
      right: 'Chalk it up to a clerical error',
    },
    'gate-tally': {
      text: "Someone's been carving tally marks into the inside of the gate. The count is higher than the number of days since you took office.",
      left: 'Sand the marks off',
      right: "Leave them, someone's just counting something",
    },
    'the-warm-welcome': {
      text: "A resident reports that when they got lost in a whiteout for ten minutes near the wall, they 'never once felt afraid.' They say it like a good thing.",
      left: 'Take the report seriously, restrict solo wall duty',
      right: 'Chalk it up to adrenaline, nothing more',
    },
    'the-borrowed-face': {
      text: 'A resident swears they saw someone who looks exactly like their sibling — who died two years ago — near the wall at dusk.',
      left: 'Take the report seriously, log it',
      right: 'Grief plays tricks, let it go',
    },
    'the-patient-crowd': {
      text: 'Watch reports say the same handful of figures have been standing at the same spot outside the wall for three days straight, unmoving.',
      left: 'Increase watch rotations',
      right: "They'll get bored and leave eventually",
    },
    'the-shared-silence-two': {
      text: "Meetings have started ending, not beginning, with everyone going quiet at once. Nobody's mentioned it out loud yet.",
      left: 'Name it in the next meeting, directly',
      right: "Let the habit be, it's probably nothing",
    },
  },
}
