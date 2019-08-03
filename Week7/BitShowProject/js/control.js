import * as data from "./data.js";
import * as ui from "./ui.js";
import Show from "./data.js"

const $search = document.querySelector(".search-input");
const $logo = document.querySelector(".logo");
const $mainElement = document.querySelector("main");

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
                            console.log(e.path[0].attributes.idShow.value);
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
            const id = e.path[0].attributes[1].value;
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
