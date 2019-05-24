// $(document).ready(function () {

// });

// $(function () {
//     console.log('Hello World');
// });
// Selecting 

// Create a page that contains navigation (ul element)
// Navigation should contain odd number of elements

// Select the first element of the list and give it a bottom border

// Select all list elements and transform their text to uppercase 

// Select active element of the list and change its font color

// Find the middle one and change its background color
var length = $("ul li").length;
var res = (length + 1) / 2;
res = res - 1;
console.log(res - 1);

$("nav ul li:first").css("border-bottom", "1px solid red");
$("nav li a").attr("style", "text-transform:uppercase");
$(".active a").css("color", "cyan");
$("nav ul li").eq(res).css("background-color", "orange");



