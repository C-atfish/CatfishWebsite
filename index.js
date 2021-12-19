var imgSpot = document.getElementById("imgPlace");
var images = ["HeavyStepsTrackart.jpg", "FallingInReverseTrackart.jpg"];
var trackNames = ["Heavy Steps", "Falling In Reverse"];
var ytLinks = ["https://www.youtube.com/watch?v=s7wJv-Vof50", "https://www.youtube.com/watch?v=C8qhvFMsFOM"];
var infoSpot = document.getElementById("trackInfo");
var buttonSpot = document.getElementById("buttonDiv");

var imgCounter = 0;
window.onload = loadIndex();

function nextPhoto(){
    imgCounter++;
    imgSpot.innerHTML = `<img src="img/${images[imgCounter]}" class="trackArt">`;
    infoSpot.innerHTML =`<h3><a href="${ytLinks[imgCounter]}">${trackNames[imgCounter]}</a></h3>`;
    
    
}

function lastPhoto(){

    imgCounter--;
    imgSpot.innerHTML = `<img src="img/${images[imgCounter]}" class="trackArt">`;
    infoSpot.innerHTML =`<h3><a href="${ytLinks[imgCounter]}">${trackNames[imgCounter]}</a></h3>`;
    
}

function loadIndex(){
    imgSpot.innerHTML = `<img src="img/${images[imgCounter]}" class="trackArt">`;
    infoSpot.innerHTML =`<h3><a href="${ytLinks[imgCounter]}">${trackNames[imgCounter]}</a></h3>`;
    
    // FIll inn logic to link number to array with link and image
    for(var i = 0; i < images.length;i++){
        buttonSpot.innerHTML += `<button>${i}</button>`;
    }
}