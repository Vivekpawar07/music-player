// Get a reference to the audio element in the HTML document
const audioElement = document.getElementById('myAudio');

// Play the audio file
audioElement.play();

let play = document.getElementById("play");
function playMusic(){
    let audio = new Audio("Weeknd.mp3");
    audio.play();
    audioElement.pause();
}
play.addEventListener("click", playMusic);