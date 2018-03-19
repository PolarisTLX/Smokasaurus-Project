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
