const riddleMemory = {
  lastNouns: [],
  lastVerbs: [],
  lastLines: []
};

function getTimePhase() {
  const hour = new Date().getHours();
  if (hour >= 22 || hour < 4) return "night";
  if (hour >= 16) return "evening";
  if (hour >= 6 && hour < 12) return "morning";
  return "day";
}

const styleByPhase = {
  morning: [
    "Decrypt the [noun] before it [verb]s your thoughts.",
    "A [noun] awakens when logic [verb]s.",
    "Format clarity is born at first [verb]."
  ],
  day: [
    "What [noun] survives when [verb]ing fails?",
    "The [noun] was left to [verb] in silence.",
    "Echoes of [noun] continue to [verb] beyond control."
  ],
  evening: [
    "Each [noun] fades once the [verb] begins.",
    "Only the forgotten [noun] dares to [verb] twice.",
    "[noun]. [verb]. [noun]. Again and again."
  ],
  night: [
    "Dreams are just [noun]s trying to [verb] their way back.",
    "Nothing [verb]s where the [noun] has vanished.",
    "The [noun] drifts through recursive [verb]s."
  ]
};

function echoFromMemory(tokens, fallback) {
  return tokens.length && Math.random() > 0.3
    ? tokens[Math.floor(Math.random() * tokens.length)]
    : fallback[Math.floor(Math.random() * fallback.length)];
}

function injectNeuroRiddle() {
  const phase = getTimePhase();
  const template = getRandom(styleByPhase[phase]);

  const noun1 = echoFromMemory(riddleMemory.lastNouns, nouns);
  const noun2 = echoFromMemory(riddleMemory.lastNouns, nouns);
  const verb1 = echoFromMemory(riddleMemory.lastVerbs, verbs);
  const verb2 = echoFromMemory(riddleMemory.lastVerbs, verbs);

  const output = template
    .replace(/

\[noun\]

/, noun1)
    .replace(/

\[noun\]

/, noun2)
    .replace(/

\[verb\]

/, verb1)
    .replace(/

\[verb\]

/, verb2);

  riddleMemory.lastNouns.push(noun1, noun2);
  riddleMemory.lastVerbs.push(verb1, verb2);
  riddleMemory.lastLines.push(output);

  const answer = echoFromMemory(riddleMemory.lastNouns, nouns);
  const format = getRandom(["[DEC]", "[HX]", "[OCT]"]);
  const encoded = wordToAscii(answer, format);

  riddles.push({
    riddle: output,
    plain: answer,
    format,
    answer: encoded,
    quantum: false,
    difficulty: "quantum",
    origin: "neurolexicon",
    theme: "memory",
    log: `🧠 Generated during ${phase.toUpperCase()} phase from echo memory.`
  });
}
