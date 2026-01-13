const audio = new Audio('https://files.catbox.moe/2bz695.mp3');
audio.loop = true;
audio.play();
let audio = document.getElementById('bg-audio');
let btn = document.getElementById('audio-btn');

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    btn.innerHTML = 'Pause';
  } else {
    audio.pause();
    btn.innerHTML = 'Play';
  }
}
