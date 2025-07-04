// 🧠 Pre-encode all riddle answers (safe now that riddles.js is loaded first)
riddles.forEach(r => {
  r.encodedAnswers = r.answers.map(ans => wordToAscii(ans, r.format));
});

let users = JSON.parse(localStorage.getItem("lockdownUsers") || "{}");
let currentUser = null;
let level = 0;
let currentRiddle = null;
let timerLimit = 30;
let scrambleRiddles = false;
let formatVisible = true;
let lockBackspace = false;
let timer;
const asciiInput = document.getElementById("asciiInput");

// 🔐 Agent Login
document.getElementById("loginBtn").onclick = () => {
  const name = loginUsername.value.trim();
  const pass = loginPassword.value.trim();
  if (!name || !pass) {
    highlightField(loginUsername);
    highlightField(loginPassword);
    return showBadge("⚠️ Enter credentials");
  }

  hashPassword(pass).then(hashed => {
    if (users[name]?.password === hashed) {
      currentUser = name;
      loadProfile(name);
      startGame();
    } else {
      showBadge("❌ Access denied");
    }
  });
};

// 🧑‍💻 Create New Agent
document.getElementById("createAccountBtn").onclick = () => {
  const name = loginUsername.value.trim();
  const pass = loginPassword.value.trim();
  if (!name || !pass) {
    highlightField(loginUsername);
    highlightField(loginPassword);
    return showBadge("⚠️ Enter details");
  }
  if (users[name]) return showBadge("❌ Codename taken");

  hashPassword(pass).then(hashed => {
    users[name] = {
      password: hashed,
      stats: { solved: 0, failures: 0, level: 0 },
      journal: "",
      rank: "",
      achievements: [],
      lore: []
    };
    localStorage.setItem("lockdownUsers", JSON.stringify(users));
    showBadge("✅ Registered successfully");
  });
};

// 🚀 Launch Game
function startGame() {
  loginPanel.style.display = "none";
  gamePanel.style.display = "block";
  level = users[currentUser].stats.level || 0;
  applyDifficultySettings(level);
  nextRiddle();
}

// 🎚️ Difficulty Logic
function getDifficultyTier(level) {
  if (level < 6) return "Standard Ops";
  if (level < 11) return "Anomaly Zone";
  return "Blackout Protocol";
}

function applyDifficultySettings(level) {
  const tier = getDifficultyTier(level);
  switch (tier) {
    case "Standard Ops":
      timerLimit = 30;
      formatVisible = true;
      scrambleRiddles = false;
      lockBackspace = false;
      break;
    case "Anomaly Zone":
      timerLimit = 20;
      formatVisible = false;
      scrambleRiddles = true;
      lockBackspace = false;
      tierAlert(tier);
      break;
    case "Blackout Protocol":
      timerLimit = 15;
      formatVisible = false;
      scrambleRiddles = true;
      lockBackspace = true;
      tierAlert(tier);
      break;
  }
  levelDisplay.textContent = `LEVEL ${level} — ${tier}`;
}

// 🔄 Load New Riddle
function nextRiddle() {
  currentRiddle = getRandom(riddles);
  if (scrambleRiddles) {
    currentRiddle.riddle = scrambleText(currentRiddle.riddle);
  }

  riddle.textContent = currentRiddle.riddle;
  formatDisplay.textContent = formatVisible ? `FORMAT: ${currentRiddle.format}` : `FORMAT: [???]`;
  asciiInput.value = "";
  status.textContent = "Decrypt now";

  clearTimeout(timer);
  timerDisplay.textContent = `${timerLimit}s`;
  let timeLeft = timerLimit;
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      failureHandler("⛔ TIMEOUT");
    }
  }, 1000);
}

// 💥 Scramble Visual
function scrambleText(text) {
  return text.split("").sort(() => 0.5 - Math.random()).join("");
}

// 🧪 Player Input Handler
asciiInput.addEventListener("keydown", e => {
  if (lockBackspace && e.key === "Backspace") {
    e.preventDefault();
    showBadge("⛔ BACKSPACE LOCKED", 1500);
  }
  if (e.key === "Enter") {
    const input = asciiInput.value.trim().toLowerCase();
    if (currentRiddle.answers.includes(input)) {
      successHandler();
    } else {
      failureHandler("❌ INVALID");
    }
  }
});

// ✅ Success Handler
function successHandler() {
  clearInterval(timer);
  status.textContent = "✅ ACCESS GRANTED";
  users[currentUser].stats.solved++;
  level++;
  users[currentUser].stats.level = level;
  localStorage.setItem("lockdownUsers", JSON.stringify(users));
  applyDifficultySettings(level);
  setTimeout(nextRiddle, 1500);
}

// ❌ Failure Handler
function failureHandler(reason = "❌ ACCESS DENIED") {
  status.textContent = reason;
  if (getDifficultyTier(level) === "Blackout Protocol") {
    triggerEmergencyFlash();
  }
  users[currentUser].stats.failures++;
  localStorage.setItem("lockdownUsers", JSON.stringify(users));
  setTimeout(nextRiddle, 2000);
}

// 🧠 Optional: Load full profile logic
function loadProfile(name) {
  // Placeholder: can be extended to load rank, journal, etc.
}
