var idleMario = document.querySelector('.mario');
var world = document.querySelector('.bg-img');
var block = document.querySelector('.block');
var moving = false;
var x = 0;
var intr;

var movingBackground = function (e) {

    if (e.keyCode === 39) {

        if (e.type === "keydown" && !moving) {
            idleMario.classList.add("running");
            intr = setInterval(function () {
                x -= 50;
                world.style.backgroundPosition = x + 'px 0';
            }, 120);
            moving = true;
        } else if (e.type === "keyup") {
            idleMario.className = 'mario';
            clearInterval(intr);
            moving = false;
        }
    }
};

document.addEventListener('keydown', movingBackground);
document.addEventListener('keyup', movingBackground);

var movingBack = function (e) {

    if (e.keyCode === 37) {

        if (e.type === "keydown" && !moving) {
            idleMario.classList.add("running");
            idleMario.classList.toggle('img-reverse');
            intr = setInterval(function () {
                x += 50;
                world.style.backgroundPosition = x + 'px 0';
            }, 120);
            moving = true;
        } else if (e.type === "keyup") {
            idleMario.className = 'mario';
            clearInterval(intr);
            moving = false;
        }
    }
};

document.addEventListener('keydown', movingBack);
document.addEventListener('keyup', movingBack);