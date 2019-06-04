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
            callBack(data);
        }
    }


    function searchUsers() {

        var searchedUsers = [];


        return searchedUsers
    }

    function getRepos(userName, callback) {
        var requestRepo = "https://api.github.com/search/users/:" + userName + "/repos";
        console.log(requestRepo);

        $get(requestRepo, function (data) {
            console.log(data);
            callback(data);
        })
    }


    return {
        preparingTheRequest: preparingTheRequest,
        searchUsers: searchUsers,
        dataArray: dataArray,
        getRepos:getRepos
    }

})();