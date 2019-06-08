import * as ui from "./ui.js";
import * as data from "./data.js";
let $searchButton = document.querySelector("#search");


$searchButton.addEventListener("click", setupEventListener);

function setupEventListener() {
    let searchQuery = ui.getSearchInput()
    data.preparingTheRequest(searchQuery)
        .then((data) => ui.displayData(data))
        .then(() => clickEventListener())
}

function clickEventListener() {
    let $aElements = document.querySelectorAll("a");

    $aElements.forEach(element => {
        element.addEventListener("click", function (e) {
            const username = e.path[1].text;
            //niz sa obj
            data.getRepositories(username)
                .then((userRep) => ui.showRepository(userRep))
        });
    })
};

const init = () => {
    setupEventListener();
    clickEventListener();
}

export {
    init
}
