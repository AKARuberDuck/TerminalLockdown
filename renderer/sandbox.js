const input = document.getElementById("sandboxInput");
const output = document.getElementById("sandboxOutput");
const mode = document.getElementById("sandboxMode");

input.addEventListener("input", () => {
  const val = input.value.trim();
  const type = mode.value;
  let result = "";

  if (!val) {
    output.textContent = "[ Awaiting input... ]";
    return;
  }

  try {
    if (type.startsWith("ENC")) {
      const format = type.includes("HEX") ? "[HX]" : type.includes("OCT") ? "[OCT]" : "[DEC]";
      result = wordToAscii(val, format);
    } else {
      const base = type === "HEX" ? 16 : type === "OCT" ? 8 : 10;
      result = val
        .split(/\s+/)
        .map(code => String.fromCharCode(parseInt(code, base)))
        .join("");
    }
    output.textContent = result;
  } catch (e) {
    output.textContent = `[ Error: ${e.message} ]`;
  }
});
