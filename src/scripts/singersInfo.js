// function playingMusic() {
//     if (.paused) {
//         console.log(audioElement.paused);
//         audioElement.play();
//         playButton.innerHTML = `<img class="Singer__playlist-icon"src="./src/icons/pause.webp">`;

//     } else {
//         audioElement.pause();
//         playButton.innerHTML = `<img src="./src/icons/play.png" alt="" srcset="">`;
//     }
// }

// playButton.addEventListener('click', playingMusic);

// document.addEventListener('DOMContentLoaded', () => {
//     const btn = document.querySelectorAll('.Singer__playlist-btn');
//     const  playButton = document.querySelector('#btn')
//     btn.forEach(button => {

//         button.addEventListener('click', () => {
//             const audio = button.previousElementSibling;
//             if (audio.paused) {
//                 audio.play();
//             } else {
//                 audio.pause();
//                 playButton.innerHTML = `<img src="./src/icons/play.png" alt="" srcset="">`;
//             }
//         })
//     })
// })

document.addEventListener("DOMContentLoaded", () => {
  let currentAudio = null; // Track the currently playing audio element
  // Select all playlist buttons
  const btns = document.querySelectorAll(".Singer__playlist-btn");

  btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const currentButton = e.target.closest("button");
      const audio = currentButton.previousElementSibling;

      if (currentAudio && currentAudio !== audio) {
        window.audio = currentAudio;
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentAudio) {
          currentAudio.nextElementSibling.innerHTML = `<img src="./src/assets/icons/play.png" alt="Play">`;
        }
      }

      if (audio.paused) {
        audio.play();
        currentButton.innerHTML = `<img class="Singer__playlist-icon" src="./src/assets/icons/pause.png" alt="Pause">`;
      } else {
        audio.pause();
        currentButton.innerHTML = `<img src="./src/assets/icons/play.png" alt="Play">`;
      }

      currentAudio = audio;
    });
  });
});
