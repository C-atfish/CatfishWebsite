var images = ["HeavyStepsTrackart.jpg", "FallingInReverseTrackart.jpg", "BadDeedsTrackart.jpg", "finalCluetrackart.jpg"];
var trackNames = ["Heavy Steps", "Falling In Reverse", "Bad Deeds", "Final Clue"];
var ytLinks = ["https://www.youtube.com/watch?v=s7wJv-Vof50", "https://www.youtube.com/watch?v=C8qhvFMsFOM", "https://www.youtube.com/watch?v=Wzg9C-F1xlw", "https://www.youtube.com/watch?v=Quy797_g_dc&list=OLAK5uy_kDuTsSdRF7ueoKJnkBTJa3LmgMhmPIo5A"];

var imgSpot = document.getElementById("imgPlace");
var infoSpot = document.getElementById("trackInfo");
var buttonSpot = document.getElementById("buttonDiv");


window.onload = loadIndex();

setInterval(randomPhoto, 6000);


function showPhoto(photoNumber){

    
    imgSpot.innerHTML = `<img src="img/${images[photoNumber]}" class="trackArt">`;
    infoSpot.innerHTML =`<h3><a href="${ytLinks[photoNumber]}">${trackNames[photoNumber]}</a></h3>`;

}

function loadIndex(){
    imgSpot.innerHTML = `<img src="img/${images[0]}" class="trackArt">`;
    infoSpot.innerHTML =`<h3><a href="${ytLinks[0]}">${trackNames[0]}</a></h3>`;
    
    // FIll inn logic to link number to array with link and image
    for(var i = 0; i < images.length;i++){
        buttonSpot.innerHTML += `<button class="photoButton" onclick="showPhoto(${i})">${i+1}</button>`;
    }
}

function randomPhoto(){
    
    var randomNumber = Math.floor(Math.random() * (trackNames.length));

    
    imgSpot.innerHTML = `<img src="img/${images[randomNumber]}" class="trackArt">`;
    infoSpot.innerHTML =`<h3><a href="${ytLinks[randomNumber]}">${trackNames[randomNumber]}</a></h3>`;
}