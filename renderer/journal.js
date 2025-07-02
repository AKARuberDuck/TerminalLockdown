// journal.js — Agent’s personal log, optional encryption

function saveJournal() {
  let text = document.getElementById("journalTextarea").value.trim();
  const encrypted = document.getElementById("encryptJournal").checked;
  if (!text) return;
  const key = `journal_${agent}`;
  const payload = encrypted ? wordToAscii(text, "[DEC]") : text;
  localStorage.setItem(key, payload);
}

function loadJournal() {
  const data = localStorage.getItem(`journal_${agent}`);
  if (!data) return "";
  const isEnc = /^\d+( \d+)*$/.test(data);
  return isEnc ? asciiToWord(data, "[DEC]") : data;
}

window.addEventListener("DOMContentLoaded", () => {
  const field = document.getElementById("journalTextarea");
  if (typeof agent !== "undefined" && field) {
    field.value = loadJournal();
  }
});
