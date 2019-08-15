const $root = document.querySelector(".root");
const $search = document.querySelector(".search-input");
const $searchList = document.querySelector(".search-list");

const displayingFirstContent = (data) => {
    $root.innerHTML = "";
    $root.className = "container root style";
    data.forEach((data) => {
        let movie = data.name;
        let img = data.image.medium;
        let id = data.id;
        let card = $(`<span><a href='#' data-show-id='${id}'><img src='${img}' alt=''></img>${movie}</a></span>`
        );
        $(".root").append(card);
    });
}
const displayingSearchedShows = (data) => {
    $root.innerHTML = "";
    $root.className = "container root style";
    data.forEach((data) => {
        let movie = data.show.name;
        let img = data.show.image.medium;
        let id = data.show.id;
        let card = $(`<span><a href='#' data-show-id='${id}'><img src='${img}' alt=''></img>${movie}</a></span>`
        );
        $(".root").append(card);
    });
}
const displayingSingleMoviePage = (singleShowData) => {
    $root.innerHTML = "";

    const name = singleShowData.name;
    const image = singleShowData.image.original;
    const seasons = singleShowData._embedded.seasons.length;
    const details = singleShowData.summary

    const castArr = singleShowData._embedded.cast;
    let castNames = [];
    castArr.forEach((element, i) => {
        castNames[i] = element.person.name;
    });

    $root.classList.remove("style");
    $root.innerHTML = `
    <h1>${name}</h1>
    <div class="singleShow">     
        <img src='${image}' alt='img'>
        <div class="lists">
            <h2>Seasons (${seasons})</h2>
            <ul class="seasons">
                
            </ul>

            <h2>Cast</h2>
            <ul class="casts">

            </ul>
        </div>
    </div>
    <div class="details">
        <h2>Show Details</h2>
        <p>${details}</p>
    </div>
`;
    //cast ul
    const $castList = document.querySelector(".casts");

    castNames.forEach(element => {
        const listItem = document.createElement('li');
        const castTextNode = document.createTextNode(element);
        listItem.appendChild(castTextNode);
        $castList.appendChild(listItem);
    });
    //seasons date ul
    const $seasonsList = document.querySelector(".seasons");
    const seasonsArray = singleShowData._embedded.seasons;

    seasonsArray.forEach(element => {
        const listItem = document.createElement('li');
        const premiereAndEndDateTextNode = document.createTextNode(element.premiereDate + " " + element.endDate);
        listItem.appendChild(premiereAndEndDateTextNode);
        $seasonsList.appendChild(listItem);
    });
};

const getInputValue = () => $search.value;

const displaySearchedShows = (arrOfObjNameId, addEvents) => {
    $searchList.innerHTML = "";

    arrOfObjNameId.forEach((element) => {
        const listItem = document.createElement('li');
        let linkItem = document.createElement('a');

        const atr = document.createAttribute("href");
        linkItem.setAttributeNode(atr);

        let idAtr = document.createAttribute("idShow");
        idAtr.value = `${element.id}`;
        linkItem.setAttributeNode(idAtr);

        const showName = document.createTextNode(element.name);
        linkItem.appendChild(showName);
        listItem.appendChild(linkItem);
        $searchList.appendChild(listItem);

        return addEvents()
    })
}

const clearSearchedList = () => {
    $searchList.innerHTML = "";
}

export {
    displayingFirstContent,
    displayingSingleMoviePage,
    getInputValue,
    displaySearchedShows,
    clearSearchedList,
    displayingSearchedShows
}