const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

play.addEventListener("click", () => {
        music.play();

});