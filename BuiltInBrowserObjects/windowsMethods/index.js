function greetingMsg() {
    alert('Hello World');
}
greetingMsg()
var userInput = prompt('How are you')
var userChoice = confirm('We will submit this answer now!'+ '\n' + userInput);
if (userChoice) {
    alert('Success message is sent');
};