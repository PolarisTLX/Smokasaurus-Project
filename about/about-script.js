var main_image = document.getElementById("main-image");
// var side_images = document.getElementById("side-images");
var side_images = document.getElementsByClassName("side-images");


main_image.addEventListener("mouseover", showSideImages);

function showSideImages() {

    // main_image.style.height = 100 + "px";

    for (var i in side_images) {
      side_images[i].style.visibility = "visible";
    }

}

$(document).ready(function() {
  'use strict';

  new WOW().init();
});
