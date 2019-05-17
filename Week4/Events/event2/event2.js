// Event Handlers Defined on DOM Elements (Chat Room)

// Create chat room page containing
// Input field for writing message
// Button for sending message
// Area for showing sent messages

// After the Send button is clicked, the message from the input field is moved to the area with all other messages


// createTextNode()
// 
var input = document.querySelector(".input");
var chat = document.querySelector(".chat");
var link = document.querySelector(".link");

link.onclick = function () {
    console.log("a");

    var text = input.value;
    var message = document.createElement("div");
    message.textContent = text;
    chat.appendChild(message);
};

// uzima vrednost nekog polja!!!!!!!!!!!!!!
// //selektuje CHAT textContent. ili append
// createTextNode("some text");