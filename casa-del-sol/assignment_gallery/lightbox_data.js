"use strict";

/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Image List

      Filename:lightbox_data.js
*/

// Title of the slideshow
let lightboxTitle = "Casa del Sol Menu Gallery";

// Names of the image files shown in the slideshow
let imgFiles = ["photo01.jpg", "photo02.jpg", "photo03.jpg", "photo04.jpg",
                "photo05.jpg", "photo06.jpg", "photo07.jpg", "photo08.jpg",
                "photo09.jpg", "photo10.jpg", "photo11.jpg", "photo12.jpg"]

// Captions associated with each image
let imgCaptions = new Array(12);
imgCaptions[0]="Birria Tacos";
imgCaptions[1]="Enchiladas de Mole"; 
imgCaptions[2]="Fish Tacos"; 
imgCaptions[3]="Tamales"; 
imgCaptions[4]="Pozole";
imgCaptions[5]="Beef tacos";
imgCaptions[6]="Traditional Mexican Cuisine";
imgCaptions[7]="Casa del Sol Restaurant";
imgCaptions[8]="Chilaquiles";
imgCaptions[9]="Casa del Sol Celebration";
imgCaptions[10]="Margarita";
imgCaptions[11]="Pineapple Margarita";

// Count of images in the slideshow
let imgCount = imgFiles.length;
