var dataModule = (function () {
    var data = [];

    function fetchPosts(searchStr, callback) {
        var requestURL = 'https://api.github.com/search/users?q=' + searchStr;

        $.get(requestURL, function (data) {
            callback(data.items);
            console.log(data);
        }) // dobijamo undefined, cuvamo telo i i zvrsavamo ga u ctrl kad stigne response
    }

    function afterUserDataReceived(users) {
        users.array.forEach(user => {
            var $paragraph = $('<p>').text;
            $("body").append($paragraph);
        });
    }
    searchUsers("bit", afterUserDataReceived);
    return {
        fetchPosts: fetchPosts
    }

})()