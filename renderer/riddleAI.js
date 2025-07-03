const riddleMemory = {
  lastNouns: [], lastVerbs: [], lastLines: []
};

function getTimePhase() {
  const hour = new Date().getHours();
  if (hour < 4 || hour >= 22) return "night";
  if (hour < 12) return "morning";
  if (hour < 18) return "day";
  return "evening";
}

const styleByPhase = {
  morning: ["The [noun] awakens as logic [verb]s."],
  day: ["Only the [noun] dares to [verb] twice."],
  evening: ["The [noun] fractures when you [verb]."],
  night: ["Dreams are [noun]s trying to [verb] back."]
};

function injectNeuroRiddle() {
  const phase = getTimePhase();
  const template = getRandom(styleByPhase[phase]);

  const noun1 = getRandom(nouns);
  const noun2 = getRandom(nouns);
  const verb1 = getRandom(verbs);
  const verb2 = getRandom(verbs);

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

  const format = getRandom(["[DEC]", "[HX]", "[OCT]"]);
  const answer = noun1;
  const encoded = wordToAscii(answer, format);

  riddles.push({
    riddle: output,
    plain: answer,
    format,
    answer: encoded,
    origin: "neurolexicon",
    theme: "memory"
  });
}
