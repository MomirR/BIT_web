import * as data from "./data.js";
import * as ui from "./ui.js";
import Show from "./data.js"

const $root = document.querySelector(".root");
const $search = document.querySelector(".search-input");
const $logo = document.querySelector(".logo");
const $mainElement = document.querySelector("main");

$search.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        $root.innerHTML = "";
        let query = ui.getInputValue();
        data.fetchQuery(query)
            .then((shows) => {
                ui.displayingSearchedShows(shows);
                settingEventsToAllLinks();
            })
    }
})

data.fetchShows()
    .then((newData) => {
        ui.displayingFirstContent(newData);
        settingEventsToAllLinks();

        //setting event on logo
        $logo.addEventListener("click", () => {
            ui.displayingFirstContent(newData);
            settingEventsToAllLinks();
        })
    }) //query search
    .then(() => {
        $search.addEventListener("keyup", () => {
            let query = ui.getInputValue();
            data.fetchQuery(query)
                .then((response) => response)
                .then((shows) => {
                    const matchedShows = shows.map(element => {
                        return new Show(element.show.name, element.show.id);
                    })
                    return matchedShows;
                })
                .then((arrOfObjNameId) => {
                    ui.displaySearchedShows(arrOfObjNameId, function () {
                        const $searchedShow = document.querySelector(".search-list li a");

                        $searchedShow.addEventListener("click", (e) => {
                            e.preventDefault();
                            data.fetchSingleShow(e.path[0].attributes.idShow.value)
                                .then((singleShowData) => {
                                    ui.displayingSingleMoviePage(singleShowData);
                                    ui.clearSearchedList();
                                })
                        })
                    });
                })
        })
    })

$mainElement.addEventListener("click", () => ui.clearSearchedList())

const settingEventsToAllLinks = () => {
    const linkOfArrays = document.querySelectorAll(".root a");
    linkOfArrays.forEach((element) => {
        element.addEventListener("click", (e) => {
            //same id but different path 
            const id = (e.path[0].localName === "a") ?
                e.path[0].attributes[1].value :
                e.path[1].attributes[1].value;

            data.fetchSingleShow(id)
                .then((singleShowData) => {
                    ui.displayingSingleMoviePage(singleShowData);
                })
        });
    });
}

const init = () => {
    displayingSingleMoviePage();
}

export {
    init
}
