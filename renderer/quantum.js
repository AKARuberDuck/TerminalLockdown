function injectQuantumRiddle() {
  const phrase = getRandom([
    "00110001 01100100 01101101 — decode the identity.",
    "Logic loops leak at 0xFF42.",
    "Syntax detonation at offset ∞.",
    "The cipher thinks it's alive.",
    "Collapse the waveform. Answer the paradox."
  ]);

  const answer = "glitch";
  const format = "[HX]";
  const encoded = wordToAscii(answer, format);

  riddles.push({
    riddle: phrase,
    plain: answer,
    format,
    answer: encoded,
    quantum: true,
    difficulty: "hard",
    origin: "quantum",
    theme: "paradox"
  });
}
