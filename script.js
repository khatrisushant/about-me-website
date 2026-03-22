const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});

const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");

chatToggle.addEventListener("click", function () {
  if (chatBox.style.display === "block") {
    chatBox.style.display = "none";
  } else {
    chatBox.style.display = "block";
  }
});

function addMessage(text, className) {
  const message = document.createElement("div");
  message.classList.add(className);
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botReply(userText) {
  const text = userText.toLowerCase();

  if (text.includes("about")) {
    return "Sushant is a student learning web development and building projects with HTML, CSS, JavaScript, and GitHub.";
  } else if (text.includes("project")) {
    return "One featured project is this personal portfolio website. More projects will be added soon.";
  } else if (text.includes("contact") || text.includes("email")) {
    return "You can contact Sushant at sushantkh69@gmail.com.";
  } else if (text.includes("resume")) {
    return "You can view the resume using the Resume section on this website.";
  } else if (text.includes("github")) {
    return "You can find GitHub in the Connect with Me section.";
  } else {
    return "I can answer questions about Sushant, projects, contact, GitHub, and resume.";
  }
}

function sendMessage() {
  const userText = chatInput.value.trim();

  if (userText === "") return;

  addMessage(userText, "user-message");
  chatInput.value = "";

  setTimeout(function () {
    const reply = botReply(userText);
    addMessage(reply, "bot-message");
  }, 500);
}

sendBtn.addEventListener("click", sendMessage);

chatInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});