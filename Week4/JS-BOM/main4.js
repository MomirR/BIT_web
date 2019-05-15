// Traversing
// Create two unordered lists.
// Each list should be wrapped in a div element.
// One <li> element in the second list should have a class “active”, which sets its background color.

// Create a function that selects the <li> element with class “active”.
// Remove the class from that element, and then select the first <li> element in the first unordered list using node relations.
// Apply class to that newly selected <li> element

var li = document.getElementsByClassName("active")[0];
var fistUlLi = document.documentElement.children[1].firstElementChild.firstElementChild.firstElementChild;

function switching() {
    li.className = "";
    fistUlLi.className = "active";
}
switching();
