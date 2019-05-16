// <!-- InnerHTML
// Do the following exercise in two ways: using DOM manipulation methods and using innerHTML.
// Create a function that is used for building a dropdown/select element.
// It first builds a dropdown and then adds it to the DOM.
// The function takes two arguments: the first is an array of strings and the second is a DOM node to which the dropdown will be added.
// Create options that correspond to items in the passed array and add them to the select element.
// Add the whole dropdown list to DOM .

// Use this function to create two selects on the page.
// The first select should be appended to the first div on the page.
// The second select should be appended to the last div on the page. -->

// var selectorLi = document.querySelector("#Li");
// var string = "home<ul><li>home</li><li>home</li><li>home</li></ul>";

// function build(string, selectorLi) {
//     selectorLi.innerHTML = string;
// }

// build(string, selectorLi);


// Create a new element and store it in a variable
// var listItem = document.createElement('li');


// Create text node and store it in a variable
// var text = document.createTextNode('some text');


// Attach the text node to the element
// listItem.appendChild(text);


// find an element in DOM where this new element should be added
// var someList = document.querySelector('ul');


// append new element to the list
// someList.appendChild(listItem);

// var listItem = document.createElement("ul");
// var listItem2 = document.createElement("li");
// var text = document.createTextNode("some text");

// var array = ["li", "li", "li"];

// listItem.appendChild(text);
// var someList = document.querySelector('ul');
// someList.appendChild(listItem);

// function putinIneElements() {


//     for (i = 0; i < array.length; i++) {
//         someList.listItem2.innerHTML;
//     }

//     for (i = 0; i < 3; i++) {
//         someList.listItem2.appendChild(text);
//     }

//     // document.querySelector("#Li") = listItem;

// }


var inputArray = ['first', 'second', 'third'];

function addNode(input) {
    var node = document.createElement('ul');
    for (var i = 0; i < input.length; i++) {
        var liElement = document.createElement('li');
        liElement.textContent = input[i];
        node.appendChild(liElement);
    }
    document.querySelector('body').insertBefore(node, document.querySelector('body script'));
}
addNode(inputArray);