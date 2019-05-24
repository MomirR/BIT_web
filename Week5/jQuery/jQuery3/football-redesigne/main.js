$soccerPlayer = $('.player');
$soccerField = $('.field');
$stopMoving = $('.button');

function moveAround(event) {
    console.log(event);

    $soccerPlayer.css("left", event.pageX) + "px";  // pageX = clientX
    $soccerPlayer.css("top", event.pageY) + "px";   // pageY = clientY
}

$soccerField.on('click', moveAround);


function noMoreMoving() {
    $soccerField.off('mousemove', moveAround);
}

$stopMoving.on('mousedown', noMoreMoving);
