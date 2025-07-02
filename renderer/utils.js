function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function wordToAscii(word, format) {
  return word
    .split("")
    .map(ch => {
      const code = ch.charCodeAt(0);
      if (format === "[DEC]") return code.toString(10);
      if (format === "[HX]") return code.toString(16).toUpperCase();
      if (format === "[OCT]") return code.toString(8);
      return code;
    })
    .join(" ");
}
