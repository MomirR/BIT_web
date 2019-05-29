// Create a function which is sending request via AJAX and getting data in JSON format

// When data is received from the server, extract image url, and use that url to create image element and add it to html page.

// There is a button on HTML page!
// Each time when user click the button this function for getting image data is invoked and new picture is added to the page.

var $submit = document.querySelector("#input");
var $body = document.querySelector("body");
var $div = document.querySelector('#images')

$submit.addEventListener("click", loadRandomImage);

function loadRandomImage() {
    var apiRequest = new XMLHttpRequest();
    apiRequest.open("GET", "https://dog.ceo/api/breeds/image/random");
    apiRequest.send();

    apiRequest.onload = function () {
        var response = JSON.parse(apiRequest.response);
        $div.innerHTML = "";

        var $img = document.createElement("img");
        $img.setAttribute("src", response.message);
        $div.appendChild($img);
    }
}
// "<img src='" + response.message + "' alt=''>"