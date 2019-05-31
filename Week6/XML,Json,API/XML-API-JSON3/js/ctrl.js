var ctrlModule = (function (ui, data) {

    function setupEventListener() {

        $('#search').click(function () {
            //collect search query
            var searchQuery = ui.getSearchInput()
            console.log('searchInput', searchQuery);
        })

        data.fetchPosts(searchQuery);




    }

    function init() {
        setupEventListener();
    }

    return {
        init: init
    }
})(uiModule, dataModule);