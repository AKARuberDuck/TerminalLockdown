const journalTextarea = document.getElementById("journalTextarea");
const saveJournalBtn = document.getElementById("saveJournalBtn");
const encryptJournal = document.getElementById("encryptJournal");
const decryptToggle = document.getElementById("decryptJournalBtn");

// Load existing journal entry if present
window.addEventListener("DOMContentLoaded", () => {
  const stored = localStorage.getItem("agentJournal");
  if (stored) {
    journalTextarea.value = stored;
  }
});

saveJournalBtn.addEventListener("click", () => {
  let content = journalTextarea.value.trim();
  if (encryptJournal.checked) {
    content = wordToAscii(content, "[DEC]");
  }
  localStorage.setItem("agentJournal", content);
  showBadge("📓 Journal entry saved.");
});

// Optional: Decrypt toggle
decryptToggle?.addEventListener("click", () => {
  const content = journalTextarea.value.trim();
  const codes = content.split(/\s+/);
  if (codes.every(code => /^\d+$/.test(code))) {
    try {
      const text = codes.map(c => String.fromCharCode(parseInt(c, 10))).join("");
      journalTextarea.value = text;
      showBadge("🔓 Journal decrypted.");
    } catch (e) {
      showBadge("⚠️ Failed to decrypt.");
    }
  } else {
    showBadge("ℹ️ Entry not encrypted.");
  }
});
