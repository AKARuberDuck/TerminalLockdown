// generator.js – Template-Based Riddle Generator (Corrected RegEx)

const nouns = ["key", "shadow", "echo", "signal", "mask", "code", "path", "flame", "cipher", "trace"];
const verbs = ["run", "hide", "speak", "resonate", "fracture", "betray", "burn", "vanish", "glitch", "drift"];
const templates = [
  "What is the [noun] that [verb]s but cannot [verb]?",
  "You [verb] it once, but it [verb]s forever.",
  "The [noun] that doesn't [verb] waits for no [noun].",
  "Every [noun] must [verb] before it breaks.",
  "Only when the [noun] [verb]s do the shadows reveal themselves.",
  "Decrypt the [noun], and it will [verb] the truth.",
  "A [noun] that [verb]s leaves no [noun] behind.",
  "[noun]. [verb]. [noun]. Again and again.",
  "No [noun], no echo. Only the [verb]."
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

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
    quantum: false,
    difficulty: "medium",
    origin: "procedural",
    theme: "glitch"
  });
}
