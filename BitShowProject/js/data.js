var dataModule = (function () {

    function preparingTheRequest(onSuccess) {
        $.get('http://api.tvmaze.com/shows', function (show) {
            onSuccess(show)
        })
    }

    return {
        preparingTheRequest: preparingTheRequest
    }

})();