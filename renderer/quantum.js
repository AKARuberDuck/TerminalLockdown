function injectQuantumRiddle() {
  const phrase = getRandom([
    "Collapse the [noun]. Respond with [verb] in HEX.",
    "Syntax detonation at offset ∞.",
    "The waveform seeks a [noun]."
  ]);
  const answer = getRandom(nouns);
  const format = "[HX]";
  const encoded = wordToAscii(answer, format);

  riddles.push({
    riddle: phrase,
    plain: answer,
    format,
    answer: encoded,
    origin: "quantum",
    theme: "paradox"
  });
}
