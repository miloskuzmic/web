var field = document.querySelector('.bg');
var player = document.querySelector('img');
var stopMovingButton = document.querySelector('button');
var stopMoving = true;
function movingPlayer (e) {
    if (!stopMoving){
        return
    }
    player.style.top = e.y + "px";
    player.style.left = e.x + "px";
    console.log(e);
}

field.addEventListener('click', movingPlayer);
stopMovingButton.addEventListener('click', function(e) {
    stopMoving = !stopMoving;
    e.target.innerHTML = stopMoving ? "Stop Moving" : "Start Moving";
})
