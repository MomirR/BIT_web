var controlModule = (function (dataModule, uiModule) {

    dataModule.fetchShows(afterShowsLoaded);


    function afterShowsLoaded(shows) {
        uiModule.displayingFirstContent(shows);

        $('a').on("click", function () {
            var id = $(this).attr("data-show-id");

            dataModule.fetchSingleShow(id, displayingSingleMoviePage);

        })

    }

    function displayingSingleMoviePage(singleShowUrl) {
        uiModule.loadingSingleMoviePage(singleShowUrl);
    }

    // return {
    //     displayingFirstContent: displayingFirstContent
    // }
})(dataModule, uiModule);

