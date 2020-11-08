const btn = document.querySelector('.btn');
const video = document.querySelector('video');
const image = document.querySelector('.btn-img');

video.playbackRate = 0.6;

btn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    image.setAttribute('src', 'pause.png');
  } else {
    video.pause();
    image.setAttribute('src', 'play.png');
  }
});


