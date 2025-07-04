// 🔁 Get random item from array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 🔠 Convert word to ASCII based on format
function wordToAscii(word, format) {
  return word.split("").map(char => {
    const code = char.charCodeAt(0);
    if (format === "[DEC]") return code.toString(10);
    if (format === "[HX]")  return code.toString(16).toUpperCase();
    if (format === "[OCT]") return code.toString(8);
    return code;
  }).join(" ");
}

// 🔐 Secure SHA-256 Password Hashing
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// ✅ Validate answer (case-insensitive)
function isCorrectAnswer(input, riddle) {
  const normalized = input.trim().toLowerCase();
  return riddle.answers.some(ans => normalized === ans.toLowerCase());
}

// 📊 Get riddle format stats
function getRiddleStats() {
  const formats = ["[DEC]", "[HX]", "[OCT]"];
  const stats = {
    total: riddles.length,
    formats: {}
  };
  formats.forEach(fmt => {
    stats.formats[fmt] = riddles.filter(r => r.format === fmt).length;
  });
  return stats;
}

// 🧬 Pre-encode all riddle answers for faster matching
riddles.forEach(r => {
  r.encodedAnswers = r.answers.map(ans => wordToAscii(ans, r.format));
});
