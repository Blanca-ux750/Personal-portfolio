"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Application to generate a slide show
      Author: Blanca  
      Date:2026-06-16

      Filename: js05.js
*/


window.addEventListener("load", setupGallery);

function setupGallery() {
  
   let imageCount = imgFiles.length;
   let lightBox = document.getElementById("lightbox");
   let currentSlide = 1;
   let runShow = true;
   let showRunning;
   
   let lbTitle = document.createElement("h1");
   lbTitle.id = "lbTitle";
   lbTitle.textContent = lightboxTitle;
   lightBox.appendChild(lbTitle);

   let lbCounter = document.createElement("div");
   lbCounter.id = "lbCounter";
   lbCounter.textContent = currentSlide + "/" + imageCount;
   lightBox.appendChild(lbCounter);
   
   let lbPrev = document.createElement("div");
   lbPrev.id = "lbPrev";
   lbPrev.innerHTML = "&#9664;";
   lbPrev.onclick = moveToLeft;   
   lightBox.appendChild(lbPrev);
   
   let lbNext = document.createElement("div");
   lbNext.id = "lbNext";
   lbNext.innerHTML = "&#9654;";  
   lbNext.onclick = moveToRight;   
   lightBox.appendChild(lbNext);
   
   let lbPlay = document.createElement("div");
   lbPlay.id = "lbPlay";
   lbPlay.innerHTML = "&#9199;";
   lbPlay.onclick = startStopShow;
   lightBox.appendChild(lbPlay);
   
   let lbImages = document.createElement("div");
   lbImages.id = "lbImages";
   lightBox.appendChild(lbImages);
   
   
   for (let i = 0; i < imageCount; i++) {
      let image = document.createElement("img");
      image.src = imgFiles[i];
      image.alt = imgCaptions[i];
      image.onclick = createModal;
      lbImages.appendChild(image);
   }
   

   
   
   function moveToRight() {
      let firstImage = lbImages.firstElementChild.cloneNode("true");
      firstImage.onclick = createModal;
      lbImages.appendChild(firstImage);
      lbImages.removeChild(lbImages.firstElementChild);
      currentSlide++;
      if (currentSlide > imageCount) {
         currentSlide = 1;
      }
      lbCounter.textContent = currentSlide + " / " + imageCount;
   }
   
   function moveToLeft() {
      let lastImage = lbImages.lastElementChild.cloneNode("true");
      lastImage.onclick = createModal;
      lbImages.removeChild(lbImages.lastElementChild);
      lbImages.insertBefore(lastImage, lbImages.firstElementChild);
      currentSlide--;
      if (currentSlide === 0) {
         currentSlide = imageCount;
      }
      lbCounter.textContent = currentSlide + " / " + imageCount;      
   }  
   
   function startStopShow() {
      if (runShow) {
         showRunning = window.setInterval(moveToRight, 2000);
         runShow = false;
      } else {
         window.clearInterval(showRunning);
         runShow = true;
      }
   }
   
   function createModal() {
      let modalWindow = document.createElement("div");
      modalWindow.id = "lbOverlay";
      let figureBox = document.createElement("figure");
      modalWindow.appendChild(figureBox);
      
      let modalImage = this.cloneNode("true");
      figureBox.appendChild(modalImage);
      //Favorite button
      let addButton = document.createElement("button");
      addButton.textContent = "Add to Favorites";
      addButton.onclick = addToFavorites;

figureBox.appendChild(addButton);
      
      let figureCaption = document.createElement("figcaption");
      figureCaption.textContent = modalImage.alt;
      figureBox.appendChild(figureCaption);
      
      let closeBox = document.createElement("div");
      closeBox.id = "lbOverlayClose";
      closeBox.innerHTML = "&times;";
      closeBox.onclick = function() {
         document.body.removeChild(modalWindow);
      }
      
      modalWindow.appendChild(closeBox);
      
      document.body.appendChild(modalWindow);
   }
   
  function showRemoveButton() {
      if (this.nextElementSibling && this.nextElementSibling.tagName === "BUTTON") {
         return;
   }

      let removeButton = document.createElement("button");
      removeButton.textContent = "Remove";

      removeButton.onclick = function() {
         this.previousElementSibling.remove();
         this.remove();
      };

      this.insertAdjacentElement("afterend", removeButton);
   }


   function addToFavorites() {
      let favorites = document.getElementById("favorites");
      let modalImage = document.querySelector("#lbOverlay figure img");

      if (favorites.children.length >= 5) {
      alert("You can only add 5 favorites. Remove one before adding another.");
      return;
      }

      for (let i = 0; i < favorites.children.length; i++) {
      if (favorites.children[i].src === modalImage.src) {
         alert("This picture is already in your favorites.");
         return;
         }
      }

      let favoriteImage = document.createElement("img");
      favoriteImage.src = modalImage.src;
      favoriteImage.alt = modalImage.alt;
   
      favoriteImage.onclick = showRemoveButton;

      favorites.appendChild(favoriteImage);
   }
}
