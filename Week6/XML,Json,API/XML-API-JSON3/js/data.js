var dataModule = (function () {

    var dataArray = [];
    // create new XHR object
    var newXHR = new XMLHttpRequest();

    // prepares the request!
    function preparingTheRequest(searchStr, callBack) {
        newXHR.open('GET', 'https://api.github.com/search/users?q=' + searchStr);

        // send request!
        newXHR.send();

        // "load" is fired when the response to our request is completed and without error
        newXHR.onload = function (data) {
            if (newXHR.status === 200) {
                data = JSON.parse(newXHR.responseText);
                // console.log(data);
            }

            return callBack(data.items);
        }
    }


    function searchUsers() {

        var searchedUsers = [];


        return searchedUsers
    }


    return {
        preparingTheRequest: preparingTheRequest,
        searchUsers: searchUsers,
        dataArray: dataArray
    }

})();