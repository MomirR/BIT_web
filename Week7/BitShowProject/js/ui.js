//keydown nad search input
var uiModule = (function () {

    //ubaci u DOM po ratingu
    function displayingFirstContent(data) {
        // console.log(data);

        data.forEach(function (data) {
            var movie = data.name;
            var img = data.image.medium;
            var id = data.id;
            var card = $("<span><img src='" + img + "' alt=''><a href='#' data-show-id='" + id + "'>" + movie + "</a></span>");

            $(".root").append(card);

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

    function loadingSingleMoviePage(singleShowUrl) {
        $('.root').html("");

        var name = singleShowUrl.name;
        var image = singleShowUrl.image.original;
        var id = $(singleShowUrl).attr("id");
        // var cast = singleShowUrl._embedded.cast.character.id;



        console.log(singleShowUrl);





        // for (var i = 0; i < singleShowUrl._embedded.cast[i].length; i++) {
        //     if (id === singleShowUrl._embedded.cast[i].character.id) {
        //         cast = singleShowUrl._embedded.cast[i].character.id;
        //         return cast;
        //     }
        // }

        // console.log(cast);



        //this.name
        //this.image.original
        //seasons
        //cast

        var singleMovie = $(`
            <h1>${name}</h1>
            <img src='${image}' alt=''>
            <div>
                <h2></h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h2></h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <h2></h2>
            <p></p>
        `);

        $(".root").append(singleMovie);
        console.log(singleMovie);
    }

    return {
        displayingFirstContent: displayingFirstContent,
        loadingSingleMoviePage: loadingSingleMoviePage
    }
})();
