var ctrlModule = (function (ui, data) {

    var $searchButton = document.querySelector("#search");

    $searchButton.addEventListener("click", setupEventListener);

    function setupEventListener() {
        var searchQuery = ui.getSearchInput()

        data.preparingTheRequest(searchQuery, onSuccess);


        function onSuccess(dataArr) {

            dataArr.forEach(function (user) {
                data.dataArray.push(user);
            });

            ui.displayData(data.dataArray);
        }
    }

    // console.log(data.fetchPosts(searchQuery));

    function init() {
        setupEventListener();
    }

    return {
        init: init
    }
})(uiModule, dataModule);