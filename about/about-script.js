/*
// ANIMATION ON HOVER EXPERIMENT

var main_image = document.getElementById("main-image");
var side_images = document.getElementsByClassName("side-images");


main_image.addEventListener("mouseover", showSideImages);

function showSideImages() {

    // need to loop through all the elements in "side_images"
    for (var i in side_images) {
      side_images[i].style.visibility = "visible";
      side_images[i].className += " wow FadeInLeft";
    }
}
*/

$(document).ready(function() {
  'use strict';

  new WOW().init();
});


//add smooth scrolling
// $(document).ready(function() {
//     'use strict';
//
//     $('.about-buttons').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
//
// });


// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {
//
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       // event.preventDefault();
//
//       // Store hash
//       var hash = this.hash;
//
//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
//
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });
