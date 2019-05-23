var idleMario = document.querySelector('.mario');
var world = document.querySelector('.bg-img');
var block = document.querySelector('.block');


function iLikeToMoveItMoveIt(event) {

    if (event.keyCode === 39) {
        idleMario.classList.add("running");
    }
}
document.addEventListener('keydown', iLikeToMoveItMoveIt);





(function () {
    var x = 0;
    setInterval(function () {
        x -= 1;
        $('body').css('background-position', x + 'px 0');
    }, 10);
})
