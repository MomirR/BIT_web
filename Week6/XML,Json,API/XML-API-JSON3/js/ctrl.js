var ctrlModule = (function (ui, data) {

    var $searchButton = document.querySelector("#search");
    var $aEle = document.querySelector(".myStyle");

    $searchButton.addEventListener("click", setupEventListener);
   
    function setupEventListener() {
        var searchQuery = ui.getSearchInput()

        data.preparingTheRequest(searchQuery, onSuccess);

        function onSuccess(dataArr) {

            ui.displayData(dataArr);

        }
    }

    
    function clickEventListener() {
        $('a').click(function (e) {
            e.preventDefault();
            console.log(event.target);


            var userName = this.find('p').text();

            console.log(userName);

            function onSuccessRepo(data) {

                ui.showRepos(data);
            }

            data.getRepos(userName, onSuccessRepo);
        })
    }

    // console.log(data.fetchPosts(searchQuery));

    function init() {
        setupEventListener();
        clickEventListener();
    }

    return {
        init: init
    }
})(uiModule, dataModule);