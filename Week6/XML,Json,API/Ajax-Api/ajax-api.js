$(document).ready(function () {
    // var request = $.ajax({
    //     url: "https://jsonplaceholder.typicode.com/posts",
    //     method: "GET",
    //     data: { id: 12345678 },
    //     dataType: "html"
    // })

    var request = $.get("GET", "https://jsonplaceholder.typicode.com/posts", function (data, status) {

        // });
        // var parsed = $.JSON.parse(request);
        // console.log(request);

    });

// $("#p1").load("demo_test.txt");