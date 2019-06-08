var $rootEle = document.querySelector('.root');
var $searchInput = document.querySelector('#input');

function getSearchInput() {
    return $searchInput.value
}

function displayData(dataArr) {
    $rootEle.innerHTML = "";

    for (let i = 0; i < dataArr.length; i++) {
        //.root>a>p
        let aEle = document.createElement("a");
        aEle.setAttribute("href", "#");
        aEle.className = "myStyle";
        let pEle = document.createElement("p");
        let TextNode = document.createTextNode(dataArr[i].username);
        pEle.appendChild(TextNode);
        aEle.appendChild(pEle);
        $rootEle.appendChild(aEle);
        //+img
        let images = document.createElement("img");
        images.setAttribute("src", dataArr[i].img);
        aEle.appendChild(images);
    }
}

function showRepository(userRep) {
    $rootEle.innerHTML = "";

    userRep.forEach(element => {
        //div .repos
        let divEle = document.createElement("div");
        divEle.setAttribute("class", "repos");
        //h1
        let headerEle = document.createElement("h1");
        let textH1 = document.createTextNode(element.name);
        headerEle.appendChild(textH1);
        //p
        let parEle = document.createElement("p");
        let textP = document.createTextNode(element.description);
        parEle.appendChild(textP);
        //root
        divEle.appendChild(headerEle);
        divEle.appendChild(parEle);
        $rootEle.appendChild(divEle);
    });
}

export {
    getSearchInput,
    displayData,
    showRepository
}


// for (var i = 0; i < 6; i++) {
//     var divEle = document.createElement("div");
//     divEle.className = "myStyle";
//     var paragraph = document.createElement("p");
//     var TextNode = document.createTextNode(dataArr.items[i].login);
//     console.log(dataArr.items[i].login);
//     paragraph.appendChild(TextNode);
//     $rootEle.appendChild(divEle);
//     divEle.appendChild(paragraph);

//     var images = document.createElement("img");
//     images.setAttribute("src", dataArr.items[i].avatar_url);
//     divEle.appendChild(images);
// }