var controlModule = (function (dataModule, uiModule) {

    dataModule.fetchShows(afterShowsLoaded);


    function afterShowsLoaded(shows) {
        uiModule.displayingFirstContent(shows);

        $('a').on("click", function () {
            var id = $(this).attr("data-show-id");
            //pokupi id i prosledi u ui za trazenje cast i sezona
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

