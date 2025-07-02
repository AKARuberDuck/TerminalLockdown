// fontRenderer.js – Draw ASCII mini-font

const fonts = {
  mini: {
    A:[" /\\ ","/--\\","|  |"], B:["|__\\","|--<","|__/"], C:[" /~~","|   "," \\__"],
    D:["|\\ |","| \\|","|_/ "], E:["|___","|__ ","|___"], F:["|___","|__ ","|   "],
    G:[" /~~","| __"," \\_/"], H:["|  |","|--|","|  |"], I:["|","|","|"],
    J:["  |","  |","\\_|"], K:["| /","|< ","| \\"], L:["|   ","|   ","|___"],
    M:["|\\/|","|  |","|  |"], N:["|\\ |","| \\|","|  |"], O:[" /\\ ","|  |"," \\/ "],
    P:["|__\\","|__/","|   "], Q:[" /\\ ","|  |"," \\/\\"], R:["|__\\","|_ /","| \\"],
    S:[" ___","|__ "," __|"], T:["___"," | "," | "], U:["|  |","|  |","|__|"],
    V:["\\  /"," \\/ ","    "], W:["|  |","|  |","\\/\\/"], X:["\\ /"," X ","/ \\"],
    Y:["\\ /"," | "," | "], Z:["___/","  / "," /__"], " ":["  ","  ","  "]
  }
};

function renderFont(text, fontName = "mini", targetId = "asciiBanner") {
  const font = fonts[fontName] || fonts.mini;
  const lines = ["", "", ""];

  for (const ch of text.toUpperCase()) {
    const glyph = font[ch] || font[" "];
    for (let i = 0; i < 3; i++) {
      lines[i] += (glyph[i] || "  ") + " ";
    }
  }

  const output = lines.join("\n");
  const target = document.getElementById(targetId);
  if (target) target.textContent = output;
  return output;
}
