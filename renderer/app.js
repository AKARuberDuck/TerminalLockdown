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

// 🧠 Login Logic
document.getElementById("loginBtn").onclick = () => {
  const name = loginUsername.value.trim();
  const pass = loginPassword.value.trim();
  if (!name || !pass) return showBadge("⚠️ Enter credentials");

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

// 🔐 Account Creation
document.getElementById("createAccountBtn").onclick = () => {
  const name = loginUsername.value.trim();
  const pass = loginPassword.value.trim();
  if (!name || !pass) return showBadge("⚠️ Enter details");
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

// 🚀 Game Start
function startGame() {
  document.getElementById("loginPanel").style.display = "none";
  document.getElementById("gamePanel").style.display = "block";
  level = users[currentUser].stats.level || 0;
  applyDifficultySettings(level);
  nextRiddle();
}

// ⚙️ Difficulty Scaling
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
      break;
    case "Blackout Protocol":
      timerLimit = 15;
      formatVisible = false;
      scrambleRiddles = true;
      lockBackspace = true;
      break;
  }
  document.getElementById("levelDisplay").textContent = `LEVEL ${level} — ${tier}`;
}

// 🔄 Riddle Engine
function nextRiddle() {
  currentRiddle = getRandom(riddles);
  if (scrambleRiddles) {
    currentRiddle.riddle = scrambleText(currentRiddle.riddle);
  }

  const encoded = currentRiddle.encodedAnswers[0];
  document.getElementById("riddle").textContent = currentRiddle.riddle;
  document.getElementById("formatDisplay").textContent = formatVisible ? `FORMAT: ${currentRiddle.format}` : `FORMAT: [???]`;
  asciiInput.value = "";
  document.getElementById("status").textContent = "Decrypt now";

  // Timer start
  clearTimeout(timer);
  document.getElementById("timerDisplay").textContent = `${timerLimit}s`;
  let timeLeft = timerLimit;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timerDisplay").textContent = `${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      failureHandler("⛔ TIMEOUT");
    }
  }, 1000);
}

// 🧠 Scramble Riddle (Distortion)
function scrambleText(text) {
  return text.split("").sort(() => 0.5 - Math.random()).join("");
}

// 🧪 Input Handler
asciiInput.addEventListener("keydown", e => {
  if (lockBackspace && e.key === "Backspace") {
    e.preventDefault();
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

// 🎯 Success
function successHandler() {
  clearInterval(timer);
  document.getElementById("status").textContent = "✅ ACCESS GRANTED";
  users[currentUser].stats.solved++;
  level++;
  users[currentUser].stats.level = level;
  localStorage.setItem("lockdownUsers", JSON.stringify(users));
  applyDifficultySettings(level);
  setTimeout(nextRiddle, 1500);
}

// ❌ Failure
function failureHandler(reason = "❌ ACCESS DENIED") {
  document.getElementById("status").textContent = reason;
  users[currentUser].stats.failures++;
  localStorage.setItem("lockdownUsers", JSON.stringify(users));
  setTimeout(nextRiddle, 2000);
}
