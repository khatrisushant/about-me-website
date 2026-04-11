// === INTRO SCREEN INITIALIZATION ===
const introScreen = document.getElementById('intro-screen');

if (introScreen) {
  // Function to hide intro screen
  function hideIntroScreen() {
    if (introScreen && !introScreen.classList.contains('hidden')) {
      introScreen.classList.add('hidden');
    }
  }

  // Hide intro screen on click anywhere
  introScreen.addEventListener('click', hideIntroScreen);
  document.addEventListener('click', hideIntroScreen);

  // Auto-hide after 5 seconds
  setTimeout(hideIntroScreen, 5000);
}

// === DARK MODE TOGGLE ===
const themeBtn = document.getElementById('themeBtn');

if (themeBtn) {
  themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      themeBtn.textContent = '☀️ POWER OFF';
      localStorage.setItem('theme', 'dark');
    } else {
      themeBtn.textContent = '⚡ POWER ON';
      localStorage.setItem('theme', 'light');
    }
  });

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.textContent = '☀️ POWER OFF';
  }
}

// === CHAT FUNCTIONALITY ===
const chatbotToggle = document.getElementById("chatToggle");
const chatbotBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");

if (chatbotToggle && chatbotBox) {
  chatbotToggle.addEventListener("click", () => {
    chatbotBox.classList.toggle("hidden");
  });
}

function addMessage(text, className) {
  if (!chatMessages) return;
  const message = document.createElement("div");
  message.classList.add(className);
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botReply(userText) {
  const text = userText.toLowerCase();

  if (text.includes("project")) {
    return "SYSTEM: QUERY RECOGNIZED. I BUILT THIS PERSONAL PORTFOLIO USING: HTML | CSS | JAVASCRIPT. ADDITIONAL_PROJECTS STATUS: [████░░░░░░] 40% DEPLOYED";
  }

  if (text.includes("contact")) {
    return "SYSTEM: COMMUNICATION_PROTOCOL ACTIVE. EMAIL_ADDRESS: sushantkh69@gmail.com | STATUS: ONLINE";
  }

  if (text.includes("resume")) {
    return "SYSTEM: SYS_DOCUMENTATION ACCESSIBLE VIA RESUME_SECTION. TRANSFERRING_DATA...";
  }

  if (text.includes("who are you") || text.includes("about")) {
    return "SYSTEM: I_AM SUSHANT_KHATRI. SPECIALIZATION: WEB_DEVELOPMENT. LEARNING_STATUS: ACTIVE. CURRENT_PROTOCOLS: [████████░░] 80% COMPLETE";
  }

  if (text.includes("github")) {
    return "SYSTEM: GITHUB_NETWORK ACCESS ENABLED. INITIATING REPOSITORY DOWNLOAD...";
  }

  return "SYSTEM: QUERY NOT RECOGNIZED. TRY ASKING ABOUT: PROJECTS | CONTACT | RESUME | GITHUB | ABOUT_ME";
}

function sendMessage() {
  if (!chatInput) return;

  const userText = chatInput.value.trim();
  if (userText === "") return;

  addMessage("> " + userText, "user-message");
  chatInput.value = "";

  setTimeout(function () {
    const reply = botReply(userText);
    addMessage(reply, "bot-message");
  }, 500);
}

if (sendBtn) {
  sendBtn.addEventListener("click", sendMessage);
}

if (chatInput) {
  chatInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
}

// === SMOOTH SCROLL FOR NAVIGATION ===
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
// Intro screen open on click
const introScreen = document.getElementById("intro-screen");

if (introScreen) {
  introScreen.addEventListener("click", () => {
    introScreen.classList.add("hide");
  });
}
setTimeout(() => {
  introScreen.classList.add("hide");
}, 3000);