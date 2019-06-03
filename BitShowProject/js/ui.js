//keydown nad search input
var uiModule = (function () {

    //ubaci u DOM po ratingu
    function displayingFirstContent(data) {

        data.forEach(function (data) {
            var movie = data.name;
            var img = data.image.medium;
            var card = $("<span><img src='" + img + "' alt=''><a href=''>" + movie + "</a></span>");

            $(".root").append(card);

            // LOADING UP TO 50
            if (data.id === 50) {
                throw "LOADED UP TO 50"
            }

            //SORTING BY RATING

            // for (var i = 0; i < 50; i++) {
            //     moviesInfo[i] = data[i].rating.average;
            // }
            // console.log(moviesInfo);

            // data.rating.average.sort(function (a, b) {
            //     return console.log(b - a);
            // })

        });

    }

    return {
        displayingFirstContent: displayingFirstContent
    }
})();