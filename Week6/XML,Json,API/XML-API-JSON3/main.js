// When the user clicks enter, a request is sent using jQuery Ajax API

// The request is sent to GitHub’s endpoint for searching users
// Documentation can be found at https://developer.github.com/v3
// Try to find URL and structure of a request for searching users

// When a response is received, print an image and a username on the page for all the users in the response

var $input = document.querySelector("#input");
var $searchButton = document.querySelector("#search");
var $img = document.querySelector("#img");


$searchButton.addEventListener("click", pullingImagesAndUsers);

function pullingImagesAndUsers() {
    var request = new XMLHttpRequest;
    var inputValue = $input.value;
    var inputValueArray = inputValue.split(" ");
    request.open('GET', 'https://api.github.com/search/users?q=' + inputValue + '_1+SEARCH_KEYWORD_N+QUALIFIER_1+QUALIFIER_N' + , true);
    // var parsedRequest = JSON.parse(requestValue);
    request.send();

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);

            for (var i = 0, j = 1; i < data.length; i++ , j++) {
                document.querySelector("#img" + j).setAttribute("src", data[i].avatar_url); //Dynamic $Variable and URL      
                if (j === 6) {
                    break;
                }
            }
            console.log(data);
        } else {
            return "Error";
        }
    }
    // console.log(data);
}