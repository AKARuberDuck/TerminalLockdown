// utils.js – ASCII ⇄ Text Conversions

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

function asciiToWord(ascii, format) {
  return ascii
    .split(/\s+/)
    .map(s => {
      let code;
      if (format === "[DEC]") code = parseInt(s, 10);
      if (format === "[HX]") code = parseInt(s, 16);
      if (format === "[OCT]") code = parseInt(s, 8);
      return String.fromCharCode(code);
    })
    .join("");
}
