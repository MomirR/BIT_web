// Create a function which is sending request via AJAX and getting data in JSON format

// When data is received from the server, extract image url, and use that url to create image element and add it to html page.

// There is a button on HTML page!
// Each time when user click the button this function for getting image data is invoked and new picture is added to the page.

var inputEle = document.querySelector("#input");

inputEle.addEventListener("click", addNewPicture);

function addNewPicture() {
    var apiRequest = new XMLHttpRequest();
    apiRequest.open("GET", "https://dog.ceo/api/breeds/image/random");
    apiRequest.send();
    apiRequest.onload = function () {
        var apiReq = JSON.parse(apiRequest.response);
        console.log(typeof apiReq);
        var imgEle = document.createElement("img");
        imgEle.setAttribute("src", apiReq.message);
        document.querySelector("body").appendChild(imgEle);
        console.log(typeof apiReq.message);
    }
}
