// riddles.js — Core riddle bank with metadata

const riddles = [
  {
    riddle: "What has to be broken before you can use it?",
    plain: "egg",
    format: "[DEC]",
    log: "Scrambled entity trace detected.",
    quantum: false,
    difficulty: "easy",
    origin: "handwritten",
    theme: "paradox"
  },
  {
    riddle: "I'm tall when I'm young, and short when I'm old.",
    plain: "candle",
    format: "[HX]",
    log: "Organic flame source confirmed.",
    quantum: true,
    alternateAnswers: [
      { value: "wax", weight: 0.6 },
      { value: "light", weight: 0.7, unlockAfterMs: 12000 }
    ],
    difficulty: "medium",
    origin: "handwritten",
    theme: "time"
  }
];

function fillRiddleAnswers(list) {
  list.forEach(r => {
    r.answer = wordToAscii(r.plain, r.format);
  });
}

fillRiddleAnswers(riddles);
