var stop1 = true;
$(document).ready(function () {
  $('button').on('click', function(){
        stop1 = !stop1;
        if (stop1) {
            $('button').text('Stop Moving');
        }else {
            $('button').text('Start Moving');
        }
  } )
    $('div').click(function (e) {
        if (!stop1) {
            return false
        }
        $("img")
            .css({
                position: 'absolute',
                left: e.pageX,
                top: e.pageY,
               
            })
    });
});
