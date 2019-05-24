// Inserting elements
// Start with a blank HTML page

// Using just JS (jQuery), create an image gallery
// All links to images in the gallery should be elements of the same array!

// When the gallery is created and visible on the page, create gallery title and insert it before the gallery images

// Go through gallery images and set a random size to each gallery image


// Bonus:
// Set a green border around each image whose width is less than 200px up until the first one that doesn't meet that requirement 
// (i.e. when you get to the first img that is more than 200px wide, stop checking and setting green border).

$("body").prepend('<div><a href=""><img src="./img/cute1.jpg" alt=""></a><a href=""><img src="./img/cute2.jpg" alt=""></a><a href=""><img src="./img/cute3.jpg" alt=""></a></div>');
$("body").prepend("<h1>This is our gallery</h1>");

$("img").each(function () {


    $(this).css({
        "width": 500 * Math.random() + "px",
        "height": 300 * Math.random() + "px"
    });

    if ($(this).width() < 200 || $(this).width() < 200) {
        $(this).css("border", "1px solid green");
        console.log("a");
    }
});


