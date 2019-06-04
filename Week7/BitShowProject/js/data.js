var dataModule = (function () {

    function fetchShows(onSuccess) {
        $.get('http://api.tvmaze.com/shows', function (show) {
            onSuccess(show.slice(0, 49))
        })

    }

    function fetchSingleShow(id, onSuccess) {
        var url = "http://api.tvmaze.com/shows/" + id + "?embed[]=seasons&embed[]=cast";

        $.get(url, function (singleShow) {
            onSuccess(singleShow)
        })
    }

    return {
        fetchShows: fetchShows,
        fetchSingleShow: fetchSingleShow
    }

})();



