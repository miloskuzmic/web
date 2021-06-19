var msgBoxNode = document.querySelector('.msg-box');
var buttonSendNode = document.querySelector('.send-button');
var chatInputNode = document.querySelector('input');
function inputText() {
    var input = chatInputNode.value;
    msgBoxNode.innerHTML += "<p class='lead'>" + input +  "</p>" + "<br>";
    chatInputNode.value = "";
}
buttonSendNode.addEventListener('click', inputText);