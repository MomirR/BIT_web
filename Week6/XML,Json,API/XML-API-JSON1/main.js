// XML

// Use Geolocation API service
// You can find the documentation for this API at  https://www.geoplugin.com/webservices/xml

// Check out the documentation to see how to use this API

// Create a function which is sending request via AJAX and getting data in XML format


// When data is received from the server, extract country name which is detected based on IP address.

// Extra: 
// There is a button and input field on HTML page!
// Each time user clicks the button, function for getting geolocation data is invoked and new ip address written in input field is used when sending request.


// var myRequest = new XMLHttpRequest();

// // myRequest.open('GET', "http://www.geoplugin.net/xml.gp?ip=82.117.204.106");
// // myRequest.send();

// myRequest.onload = function () {
//     var geoResponse = myRequest.responseXML;
//     console.log(geoResponse);
//     var country = geoResponse.querySelector("geoplugin_countryName").textContent;
//     console.log(country);

//     var paragraphElement = document.querySelector("p");
//     paragraphElement.innerHTML = "<p>" + country + "</p>";
// }
var valueInput = document.querySelector("#input");
var geoReq = document.querySelector("#submit");

geoReq.addEventListener("click", function () {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', "http://www.geoplugin.net/xml.gp?ip=" + valueInput.value);
    myRequest.send();
    myRequest.onload = function () {
        var geoResponse = myRequest.responseXML;
        var country = geoResponse.querySelector("geoplugin_countryName").textContent;
        var paragraphElement = document.querySelector("p");
        paragraphElement.innerHTML = "<p>" + country + "</p>";
    }
})