var uiModule = (function () {
    var $rootEle = document.querySelector('.root');
    var $searchInput = document.querySelector('#input');

    function getSearchInput() {
        return $searchInput.value
    }

    //display data
    function displayData(dataArr) {
        console.log(dataArr[0].login);

        if (!$searchInput) {
            return "Input is empty";
        }
        if (!dataArr.length) {
            return "Array is empty";
        }

        //sta je post

        for (var i = 0; i < 6; i++) {
            var divEle = document.createElement("div");
            var usernameEle = document.createElement("p");
            var usernameEleWithText = document.createTextNode(dataArr[i].login);
            usernameEle.appendChild(usernameEleWithText);
            $rootEle.appendChild(divEle);
            //$rootEle.divEle.appendChild(usernameEle);

            var imgEle = document.createElement("img");
            imgEle.setAttribute("src", dataArr[i].avatar_url);
            $rootEle.divEle.insertBefore(imgEle, usernameEle);

        }
    }

    return {
        getSearchInput: getSearchInput,
        displayData: displayData
    }
})()