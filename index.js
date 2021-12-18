var imgSpot = document.getElementById("imgPlace");
var images = ["HeavyStepsTrackart.jpg", "FallingInReverseTrackart.jpg"];
var imgCounter = 0;
window.onload = imgSpot.innerHTML = `<img src="img/${images[imgCounter]}" class="trackArt">`;

function nextPhoto(){
    imgCounter++;
    imgSpot.innerHTML = `<img src="img/${images[imgCounter]}" class="trackArt">`;
    
    
}

function lastPhoto(){

    imgCounter--;
    imgSpot.innerHTML = `<img src="img/${images[imgCounter]}" class="trackArt">`;
    
}