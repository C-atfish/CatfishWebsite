var imageSpot = document.getElementById("trackArtSpot");
var buttonOne = document.getElementById("buttOne");
var buttonTwo = document.getElementById("buttTwo");
var buttonThree = document.getElementById("buttThree");
var buttonFour = document.getElementById("buttFour");
var buttonFive = document.getElementById("buttFive");
var listenSpot = document.getElementById("listenSpot");

var trackTitleSpot = document.getElementById("songTitleSpot");

var imgArray = ["FallingInReverseTrackart.jpg", "BadDeedsTrackart.jpg", "finalCluetrackart.jpg", "HeavyStepsTrackart.jpg", "tracesOfHorus.png", "VibranceFromNothingTrackArt.png"];
var titleArray = ["Falling In Reverse", "Bad Deeds", "Final Clue", "Heavy Steps", "Traces Of Horus", "Vibrance From Nothing"];
var youtubeArray = ["https://www.youtube.com/watch?v=C8qhvFMsFOM", "https://www.youtube.com/watch?v=Wzg9C-F1xlw&list=OLAK5uy_lzDYy-1kz0cfsOb2WhhfH2ydVGk1lovko", "https://www.youtube.com/watch?v=aUJncbTGIrY&list=OLAK5uy_kDuTsSdRF7ueoKJnkBTJa3LmgMhmPIo5A", "https://www.youtube.com/watch?v=s7wJv-Vof50&list=OLAK5uy_k5tyLYVXB0UBIVRvTXhZJqdnnXocNXPTU", "https://www.youtube.com/watch?v=80nUwEaLEOM", "https://www.youtube.com/watch?v=lTV_Bev8mlw&list=OLAK5uy_lq4k9pGR4EPcbhlx7w3OQttrkKp-F5DG8" ];
var spotifyArray = ["https://open.spotify.com/track/2HWpuw1ORwKmQl3sT7t1bN?si=be7b2acf6d1543ef", "https://open.spotify.com/track/5PCs3GWRhrRFHzs75Yi1oB?si=ae002dd2629f4a9d", "https://open.spotify.com/track/5aUyTRPJ8qwIztpWAti4CN?si=b072ebaf934546a3", "https://open.spotify.com/track/14bOHQi5154h4T05CEnp6T?si=d08143c36e1146a8", "not released", "https://open.spotify.com/track/6FDOKB4oXSHgqbOxlkBXBS?si=71f3fab8c7f34b52" ];
var soundcloudArray = ["https://soundcloud.com/user-8460270-314836749/fallinginreversemaster?si=b91ba24a46134f74957412793fb946cd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", "https://soundcloud.com/user-8460270-314836749/bad-deeds-instrumental?si=213e8636c60b49279553f686f6ad7477&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", "https://soundcloud.com/user-8460270-314836749/final-clue-instrumental?si=4c449f7d6ad843549a24905a2c483f22&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", "https://soundcloud.com/user-8460270-314836749/heavy-steps?si=e8e0643b37244293a3c3d38bc5d32500&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", "https://soundcloud.com/user-8460270-314836749/tracesofhorus?si=f312e17456544e2b8b957081fdb9c5aa&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", "https://soundcloud.com/user-8460270-314836749/vibrance-from-nothing?si=a9072e896d3042a69ecfb9196a1a4510&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"  ];


var randomImgInterval = window.setInterval(showRandomImg, 7000);
window.onload = showRandomImg();


function showImgOne(){
    
    clearInterval(randomImgInterval);
    randomImgInterval = window.setInterval(showRandomImg, 7000);

trackTitleSpot.innerHTML = titleArray[0];
imageSpot.innerHTML = `<img src="img/${imgArray[0]}" class="img-responsive width-auto height-10vh trackArt" alt="trackArt">`;
listenSpot.innerHTML = `<a href="${youtubeArray[0]}" target="_blank"><img src="img/YTLogo.png" alt="" class="listenYtLogo mt-1 mr-1"></a><a href="${soundcloudArray[0]}" target="_blank"> <img src="img/soundCloudLogo.png" alt="Soundcloud Logo" class="listenScLogo"><a/><a href="${spotifyArray[0]}" target="_blank"> <img src="img/SpotifyLogo .png" alt="Spotify Logo" class="listenSpotifyLogo"></a>`;

    
}

function showImgTwo(){
    
    clearInterval(randomImgInterval);
    randomImgInterval = window.setInterval(showRandomImg, 7000);

trackTitleSpot.innerHTML = titleArray[1];
imageSpot.innerHTML = `<img src="img/${imgArray[1]}" class="img-responsive width-auto height-10vh trackArt" alt="trackArt">`;
listenSpot.innerHTML = `<a href="${youtubeArray[1]}" target="_blank"><img src="img/YTLogo.png" alt="" class="listenYtLogo mt-1 mr-1"></a><a href="${soundcloudArray[1]}" target="_blank"> <img src="img/soundCloudLogo.png" alt="Soundcloud Logo" class="listenScLogo"><a/><a href="${spotifyArray[1]}" target="_blank"> <img src="img/SpotifyLogo .png" alt="Spotify Logo" class="listenSpotifyLogo"></a>`;
    
        
}

function showImgThree(){

    clearInterval(randomImgInterval);
    randomImgInterval = window.setInterval(showRandomImg, 7000);
    
    trackTitleSpot.innerHTML = titleArray[2];
    imageSpot.innerHTML = `<img src="img/${imgArray[2]}" class="img-responsive width-auto height-10vh trackArt" alt="trackArt">`;
    listenSpot.innerHTML = `<a href="${youtubeArray[2]}" target="_blank"><img src="img/YTLogo.png" alt="" class="listenYtLogo mt-1 mr-1"></a><a href="${soundcloudArray[2]}" target="_blank"> <img src="img/soundCloudLogo.png" alt="Soundcloud Logo" class="listenScLogo"><a/><a href="${spotifyArray[2]}" target="_blank"> <img src="img/SpotifyLogo .png" alt="Spotify Logo" class="listenSpotifyLogo"></a>`;
        
            
}

function showImgFour(){

    clearInterval(randomImgInterval);
    randomImgInterval = window.setInterval(showRandomImg, 7000);
    
    trackTitleSpot.innerHTML = titleArray[3];
    imageSpot.innerHTML = `<img src="img/${imgArray[3]}" class="img-responsive width-auto height-10vh trackArt" alt="trackArt">`;
    listenSpot.innerHTML = `<a href="${youtubeArray[3]}" target="_blank"><img src="img/YTLogo.png" alt="" class="listenYtLogo mt-1 mr-1"></a><a href="${soundcloudArray[3]}" target="_blank"> <img src="img/soundCloudLogo.png" alt="Soundcloud Logo" class="listenScLogo"><a/><a href="${spotifyArray[3]}" target="_blank"> <img src="img/SpotifyLogo .png" alt="Spotify Logo" class="listenSpotifyLogo"></a>`;
            
                
}

function showImgFive(){

    clearInterval(randomImgInterval);
    randomImgInterval = window.setInterval(showRandomImg, 7000);
    
    trackTitleSpot.innerHTML = titleArray[4];
    imageSpot.innerHTML = `<img src="img/${imgArray[4]}" class="img-responsive width-auto height-10vh trackArt" alt="trackArt">`;
    listenSpot.innerHTML = `<a href="${youtubeArray[4]}" target="_blank"><img src="img/YTLogo.png" alt="" class="listenYtLogo mt-1 mr-1"></a><a href="${soundcloudArray[4]}" target="_blank"> <img src="img/soundCloudLogo.png" alt="Soundcloud Logo" class="listenScLogo"><a/><a href="${spotifyArray[4]}" target="_blank"> <img src="img/SpotifyLogo .png" alt="Spotify Logo" class="listenSpotifyLogo"></a>`;
                
                    
}
function showImgSix(){

    clearInterval(randomImgInterval);
    randomImgInterval = window.setInterval(showRandomImg, 7000);
    
    trackTitleSpot.innerHTML = titleArray[5];
    imageSpot.innerHTML = `<img src="img/${imgArray[5]}" class="img-responsive width-auto height-10vh trackArt" alt="trackArt">`;
    listenSpot.innerHTML = `<a href="${youtubeArray[5]}" target="_blank"><img src="img/YTLogo.png" alt="" class="listenYtLogo mt-1 mr-1"></a><a href="${soundcloudArray[5]}" target="_blank"> <img src="img/soundCloudLogo.png" alt="Soundcloud Logo" class="listenScLogo"><a/><a href="${spotifyArray[5]}" target="_blank"> <img src="img/SpotifyLogo .png" alt="Spotify Logo" class="listenSpotifyLogo"></a>`;
                
                    
}

function showRandomImg(){

    var randomNumber = Math.floor(Math.random() * 6);



    // Make button animation for showed picture

   

    trackTitleSpot.innerHTML = titleArray[randomNumber];
    imageSpot.innerHTML = `<img src="img/${imgArray[randomNumber]}" class="img-responsive width-auto height-10vh trackArt" alt="trackArt">`;
    listenSpot.innerHTML = `<a href="${youtubeArray[randomNumber]}" target="_blank"><img src="img/YTLogo.png" alt="" class="listenYtLogo mt-1 mr-1"></a><a href="${soundcloudArray[randomNumber]}" target="_blank"> <img src="img/soundCloudLogo.png" alt="Soundcloud Logo" class="listenScLogo"><a/><a href="${spotifyArray[randomNumber]}" target="_blank"> <img src="img/SpotifyLogo .png" alt="Spotify Logo" class="listenSpotifyLogo"></a>`;

    
}