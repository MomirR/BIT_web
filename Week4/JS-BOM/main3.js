// Create two unordered lists on the page.

// Create a function that selects the second list and applies a class that sets some background color to it.

// Create a second function that, when triggered, selects all <li> elements on the page. 
// The function also sets a class that sets some bg color to every <li> element.

// Create one more unordered list and one more function
// The function​ should select only <li> elements from that last list
// Each <li> element should get a class that sets some bg color and transforms the text to uppercase.

var firstUl = document.getElementById("firstList");
var secondUl = document.getElementById("secondList");
var allLi = firstUl.querySelectorAll("li");
var allLi2 = secondUl.querySelectorAll("li");

// function settingColor() {
//     secondUl.className = "settingColor";
// }
// settingColor();

// function selectsLi(allLi) {
//     for (i = 0; i < allLi.length; i++) {
//         allLi[i].className = "bkg-color";
//     }
// }

// selectsLi(allLi);

function changingColor(allLi2) {
    for (i = 0; i < allLi.length; i++) {
        allLi2[i].className = "bkg-color2";
    }
}
changingColor(allLi2);