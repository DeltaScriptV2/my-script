const scripts = {
  MurderMystery2: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/xentace/MM2/refs/heads/main/script20%25MM2"))()',
  StealaBrainrot: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/DeltaScriptV2/Free/refs/heads/main/IeakV2"))()',
  AdoptMe: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/DeltaScriptV2/V.2/refs/heads/main/Adopt_Me"))()'
};

function setScript(game, btn) {
  document.getElementById("scriptBox").innerText = scripts[game];
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
}

function copyScript() {
  const text = document.getElementById("scriptBox").innerText;
  navigator.clipboard.writeText(text).then(() => alert("✅ Script Copied!"));
}

function randomActiveUsers() {
  const users = document.getElementById("activeUsers");
  const min = 100;
  const max = 500;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  users.textContent = `👥 Active Users: ${randomNumber}`;
}

setInterval(randomActiveUsers, 2000);
