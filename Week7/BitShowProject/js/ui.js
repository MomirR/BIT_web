const $root = document.querySelector(".root");
const $search = document.querySelector(".search-input");


const displayingFirstContent = (data) => {
    data.forEach((data) => {
        let movie = data.name;
        let img = data.image.medium;
        let id = data.id;
        let card = $("<span><img src='" + img + "' alt=''><a href='#' data-show-id='" + id + "'>" + movie + "</a></span>");
        $(".root").append(card);
    });
}

const displayingSingleMoviePage = (singleShowData) => {
    console.log(singleShowData);
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

    console.log(seasonsArray);
};

const getInputValue = () => $search.value;

export {
    displayingFirstContent,
    displayingSingleMoviePage,
    getInputValue
}

