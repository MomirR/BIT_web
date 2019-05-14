// function print(params) {
//     console.log(window.navigator.platform);
//     console.log(navigator.appVersion);
//     console.log(navigator.vendor);
// }
// console.log(print());

// function isOnline() {
//     if (navigator.onLine === true) {
//         console.log("online");
//     } else {
//         console.log("offline");
//     }
// }
// console.log(isOnline());

// window.screen
// Create a function that prints out the following information in the console:
// current browser width and height
// max possible browser height

// function widthAndHeight() {
//     var a = "";
//     a = "WIDTH IS -> " + window.screen.width + "\n" + "HEIGHT IS ->" + window.screen.height;
//     return a;
// }
// console.log(widthAndHeight());

// (function () {
//     var a = "";
//     a = "WIDTH IS -> " + window.screen.width + "\n" + "HEIGHT IS ->" + window.screen.height;
//     console.log(a);

// }());
// window.location
// Write a function that prints out website’s url information in the console:
// full url address
// domain name
// used protocol
// parameters which are part of URL.

// Create a function for reloading the page.
// Create a function that redirects you to a website address passed to it.
// Test all three functions


// function print() {
//     console.log(window.location.host);
//     console.log(window.location.hostname);
//     console.log(window.location.protocol);
//     console.log(window.location.host);
// };

// function location() {
//     console.log(window.location.href = "https://www.bgit.rs/en/");
// };

// function reloadingPage() {
//     window.location.reload;
// }
// console.log(location(), reloadingPage(), print());



// window.localStorage
// Create a function that stores passed data in the browser local storage.
// Create a function that reads the stored data, and print it out in console.
// If there is no data, print "There is no data" in the console.
// Create a function that removes data from the local storage.

// Use the previously created functions to store/read/remove some data.
// Then add some data in storage and close the browser.
// Open the browser again on the same page and use the function to read the stored value.

// Modify functions to work with sessionStorage instead of localStorage.
// Try same scenario as with localStorage to examine data livecycle.

// function adding(key, value) {
//     localStorage.setItem(key, value);
// }
// adding("Bit-zmajevi", 30);

// function print() {
//     var a = localStorage.getItem("Bit-zmajevi");
//     if (a.length) {
//         console.log(a);
//     } else {
//         console.log("There is no data");
//     }
//     return a;
// };
// print();

// function remove() {
//     localStorage.removeItem("Bit-zmajevi");
// }
// remove();

// function history() {
//     // console.log(window.location.href = "https://www.bgit.rs/en/");
//     // console.log(window.location.href = "https://www.google.com/search?source=hp&ei=DJraXIvZJOjgrgTyybPYCw&q=bit&oq=bit&gs_l=psy-ab.12..0l10.38821.39259..39627...0.0..0.91.241.3....3..0....1..gws-wiz.....0.Q6aW3YSUnp4");
//     //   console.log(window.history.back());

// }
// history();

var win = window.open('https://www.wikipedia.org/');

setTimeout(function () {
    win.close();
}, 3000);

// Window Methods
// Create a function that shows the user a greeting message using alert
// Then a question is presented to the user using prompt
// When the user provides the answer, that answer is used in the confirm dialog
// The format of the message in the dialog should be: "We will submit this answer now! " + the answer
// If the user clicks OK, show alert with success message
// If the user clicks Cancel, don't show anything

function alert() {
    console.log("Greeting");

}