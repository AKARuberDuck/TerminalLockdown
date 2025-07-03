const nouns = ["key", "echo", "signal", "cipher", "trace"];
const verbs = ["run", "hide", "glitch", "decode", "fracture"];
const templates = [
  "The [noun] that [verb]s must be traced.",
  "When you [verb], the [noun] reveals itself.",
  "Every [noun] wants to [verb] again."
];

function injectProceduralRiddle() {
  const base = getRandom(templates);
  const withNouns = base.replace(/

\[noun\]

/g, () => getRandom(nouns));
  const withVerbs = withNouns.replace(/

\[verb\]

/g, () => getRandom(verbs));
  const answer = getRandom(nouns);
  const format = getRandom(["[DEC]", "[HX]", "[OCT]"]);
  const encoded = wordToAscii(answer, format);

  riddles.push({
    riddle: withVerbs,
    plain: answer,
    format,
    answer: encoded,
    origin: "procedural",
    theme: "glitch"
  });
}
