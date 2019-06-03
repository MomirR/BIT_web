var controlModule = (function (dataModule, uiModule) {

    // function addEventListenerToAddMovie() {
    //     var addMovie = $('.root');
    //     addMovie.addEventListener('')
    // }

    //prosledi data ui
    dataModule.preparingTheRequest(afterShowsLoaded);

    function afterShowsLoaded(shows) {
        uiModule.displayingFirstContent(shows)
    }

    // return {
    //     displayingFirstContent: displayingFirstContent
    // }
})(dataModule, uiModule);

