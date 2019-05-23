// Inserting elements
// Start with a blank HTML page

// Using just JS (jQuery), create an image gallery
// All links to images in the gallery should be elements of the same array!

// When the gallery is created and visible on the page, create gallery title and insert it before the gallery images

// Go through gallery images and set a random size to each gallery image

$("body").prepend('<div><a href=""><img src="./img/cute1.jpg" alt=""></a><a href=""><img src="./img/cute2.jpg" alt=""></a><a href=""><img src="./img/cute3.jpg" alt=""></a></div>');
$("body").prepend("<h1>This is our gallery</h1>");

$("img").each(function () {
    $(this).css({
        "width": 500 * Math.random() + "px",
        "height": 300 * Math.random() + "px"
    });
 
});
