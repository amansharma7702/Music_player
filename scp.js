const music = document.querySelector("audio");
const img = document.querySelector('img');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [{
        name:"Sunflower",
        title:"Sunflower",
        artist:"Post Malone, Swae Lee",
},
{
        name:"Twenty One Pilots - Stressed Out (Tomsize Remix)",
        title:"Stressed Out",
        artist:"Twenty One Pilots"
},
{
        name:"Confetti - Ghost",
        title:"Ghost",
        artist:"Confetti",
}
]

let isPlaying = false;
// for play
const playMusic = () => {
        isPlaying = true;
        music.play();
        play.classList.replace('fa-play', 'fa-pause');
        // img.classList.add("anime");
};

// for pause
const pauseMusic = () => {
        isPlaying = false;
        music.pause();
        play.classList.replace('fa-pause', 'fa-play');
        // img.classList.add("anime");
};

play.addEventListener('click', () => {
        if (isPlaying) {
                pauseMusic();
        }
        else {
                playMusic();
        }
});

// const loadSong = (songs)=>{
//    title.textContent = songs.title;
//    artist.textContent = songs.artist;
//    music.src = "music/" + songs.name + ".mp3";
//    music.src = `music${songs.name}.mp3`;
//    img.src = ""

// };
// loadSong(songs[0]);