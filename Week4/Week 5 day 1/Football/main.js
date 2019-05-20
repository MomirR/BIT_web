var soccerPlayer = document.querySelector('.player');
var soccerField = document.querySelector('.field');
var stopMoving = document.querySelector('.button');

function moveAround(event) {

    soccerPlayer.style.left = event.clientX + "px";
    soccerPlayer.style.top = event.clientY + "px";
}

soccerField.addEventListener('mousemove', moveAround);

function noMoreMoving() {
    soccerField.removeEventListener('mousemove', moveAround);
}
stopMoving.addEventListener('mousedown', noMoreMoving);