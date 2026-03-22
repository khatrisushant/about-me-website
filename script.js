// CHAT TOGGLE (PASTE THIS AT TOP)
const chatbotToggle = document.getElementById("chatToggle");
const chatbotBox = document.getElementById("chatBox");

if (chatbotToggle && chatbotBox) {
  chatbotToggle.addEventListener("click", () => {
    chatbotBox.classList.toggle("hidden");
  });
}
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeBtn.textContent = "☀️";
    } else {
      themeBtn.textContent = "🌙";
    }
  });
}

const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");

if (chatToggle && chatBox) {
  chatToggle.addEventListener("click", function () {
    if (chatBox.style.display === "block") {
      chatBox.style.display = "none";
    } else {
      chatBox.style.display = "block";
    }
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
    return "I built this personal portfolio website using HTML, CSS, and JavaScript. More projects coming soon!";
  }

  if (text.includes("contact")) {
    return "You can contact me via email or the call button on this page.";
  }

  if (text.includes("resume")) {
    return "You can view my resume using the Resume section above.";
  }

  if (text.includes("who are you") || text.includes("about")) {
    return "I'm Sushant Khatri, a student learning web development and building projects.";
  }

  if (text.includes("github")) {
    return "Check out my GitHub for more projects!";
  }

  return "Try asking about projects, contact, resume, or about me!";
}

function sendMessage() {
  if (!chatInput) return;

  const userText = chatInput.value.trim();
  if (userText === "") return;

  addMessage(userText, "user-message");
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
// Intro screen open on click
const introScreen = document.getElementById("intro-screen");

if (introScreen) {
  introScreen.addEventListener("click", () => {
    introScreen.classList.add("hide");
  });
}