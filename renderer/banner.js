// banner.js — Phase-aware terminal splash

const baseBanners = [
` _______              _              _     _            _             
|__   __|            | |            | |   | |          | |            
   | | ___  __ _  ___| | _____ _ __ | |__ | | ___   ___| | _____ _ __ 
   | |/ _ \\/ _\` |/ __| |/ / _ \\ '_ \\| '_ \\| |/ _ \\ / __| |/ / _ \\ '__|
   | |  __/ (_| | (__|   <  __/ |_) | | | | | (_) | (__|   <  __/ |   
   |_|\\___|\\__,_|\\___|_|\\_\\___| .__/|_| |_|_|\\___/ \\___|_|\\_\\___|_|   
                              | |                                     
                              |_|                                     `
];

const seasonalBanners = {
  night: ["🌒 NIGHT PROTOCOL ENGAGED"],
  dawn:  ["🌅 SYSTEM AWAKENING"],
  dusk:  ["🌆 ECHOES OF DAY CLOSING"]
};

function getPhaseOfDay() {
  const h = new Date().getHours();
  if (h < 4 || h >= 22) return "night";
  if (h >= 5 && h <= 10) return "dawn";
  if (h >= 17 && h <= 21) return "dusk";
  return null;
}

function getBannerOverride() {
  const hash = decodeURIComponent(window.location.hash || "");
  const match = hash.match(/banner:\/\/([\w\-]+)/i);
  return match ? match[1].toLowerCase() : null;
}

function renderBanner() {
  const el = document.getElementById("asciiBanner");
  const override = getBannerOverride();
  const mood = override || getPhaseOfDay();
  const set = seasonalBanners[mood] || baseBanners;
  const msg = set[Math.floor(Math.random() * set.length)];
  if (el) el.textContent = msg;
}

renderBanner();
