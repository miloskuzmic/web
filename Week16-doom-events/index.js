
var toggleEnabled = true;

var buttonHandler = function(e) {
    if(!toggleEnabled)
        return;

    var body = document.querySelector("div");
    body.classList.toggle('second-color');
}

var offHandler = function(e) {
    toggleEnabled = !toggleEnabled;
    e.target.innerHTML = toggleEnabled ? 'Turn Off' : 'Turn On';
}
var toggle = document.querySelector('.toggle');
toggle.addEventListener("click", buttonHandler);


var off = document.querySelector('.button1');
off.addEventListener('click', offHandler);

