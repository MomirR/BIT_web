var uiModule = (function () {
    var $rootEle = $('.root');
    var $searchInput = $('#input');

    function getSearchInput() {
        return $searchInput.val()
    }

    //display data
    function displayData(dataArr) {
        if (!$searchInput) {
            return "Input is empty";
        }
        if (!dataArr.length) {
            return "Array is empty";
        }

        dataArr.forEach(function (post) {
            $rootEle.append("<p>" + post.id + ". " + post.title + "</p>")
        });
    }

    return {
        getSearchInput: getSearchInput,
        displayData: displayData,
    }

})()