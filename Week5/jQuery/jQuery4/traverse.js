var length = $("div:first img").length;
console.log(length);

var middle = (length + 1) / 2;
var index = middle - 1;
console.log(index);


$("div:first img.selected").removeClass();
$("div:first").next().find("img").eq(index).addClass("selected");