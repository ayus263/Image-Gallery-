 
 


// Get HTML elements
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');

// Music library
const musicLibrary = [
    {
        title: 'Song 1',
        artist: 'Artist 1',
        src: 'song1.mp3'
    },
    {
        title: 'Song 2',
        artist: 'Artist 2',
        src: 'song2.mp3'
    },
    {
        title: 'Song 3',
        artist: 'Artist 3',
        src: 'song3.mp3'
    }
];

// Current song index
let currentSongIndex = 0;

// Play/pause functionality
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPause

