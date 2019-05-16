// Create a function that takes text from one of the <li> elements and presents it on screen using alert.
// Create one more function.
// The function should take some text as an argument.
// The function should select the last <li> element in the list and replace its text with text passed as the function argument.

// var putanja = document.querySelector("#home");

// function nisamPozvao() {
//     var a = putanja.textContent;
//     alert(a);
// }
// nisamPozvao();

var home = document.querySelector("#home").textContent;

function takingLast(home) {

    document.querySelector("#contact").textContent = home;
}

takingLast(home);