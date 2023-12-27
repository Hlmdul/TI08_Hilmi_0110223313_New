let chatArea = document.getElementById("chat-area");
let chatInput = document.getElementById("chat-input");
let submit = document.getElementById("send-chat");

submit.addEventListener("click", function () {
  let chat = chatInput.value;
  chatArea.innerHTML += chat + "<br>";
  chatInput.value = "";
});

chatInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let chat = chatInput.value;
    chatArea.innerHTML += chat + "<br>";
    chatInput.value = "";
  }
});

let clearChat = document.getElementById("clear-chat");

clearChat.addEventListener("click", function () {
  chatArea.innerHTML = "";
});
