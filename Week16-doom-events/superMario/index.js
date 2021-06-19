var bgImgMoving = document.querySelector('body')
var marioStill = document.querySelector('.mario-still');
var marioRunning = document.querySelector('.img1');
var x = 0;
var moveBg;
bgImgMoving.addEventListener('keydown', function(event) {
    if (event.which === 39){
        marioRunning.style.display = "block"; 
        marioStill.style.display = "none"; 
        moveBg = setInterval(function(){
            x-= 1;
            bgImgMoving.style.backgroundPosition = x + 'px'
        },1)
           
        
        
        
    }
    
})