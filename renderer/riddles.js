const riddles = [];

function getRiddleStats() {
  const stats = {
    total: riddles.length,
    procedural: riddles.filter(r => r.origin === "procedural").length,
    neurolexicon: riddles.filter(r => r.origin === "neurolexicon").length,
    formats: {
      "[DEC]": riddles.filter(r => r.format === "[DEC]").length,
      "[HX]": riddles.filter(r => r.format === "[HX]").length,
      "[OCT]": riddles.filter(r => r.format === "[OCT]").length
    }
  };
  return stats;
}

// Optional: dump to console (for dev use)
function logRiddleStats() {
  const stats = getRiddleStats();
  console.log("📊 Riddle Stats:", stats);
}
