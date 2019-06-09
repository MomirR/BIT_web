import * as data from "./data.js";
import * as ui from "./ui.js";
const $search = document.querySelector(".search-input");


data.fetchShows()
    .then((newData) => {
        ui.displayingFirstContent(newData);
        //setting event to all links
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
    })
    .then(() => {
        $search.addEventListener("keyup", () => {
            let query = ui.getInputValue();
            data.fetchQuery(query);
            // console.log(query);
        })
    })

const init = () => {
    displayingSingleMoviePage();
}

export {
    init
}
