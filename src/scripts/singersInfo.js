document.addEventListener("DOMContentLoaded", () => {
  let currentAudio = null; // Track the currently playing audio element

  // Select all playlist buttons
  const btns = document.querySelectorAll(".singer__playlist-btn");

  btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const currentButton = e.target.closest("button");
      const audio = currentButton.previousElementSibling;

      // Ensure the audio element is correctly selected
      if (!(audio instanceof HTMLAudioElement)) {
        console.error("Expected an audio element, but found:", audio);
        return;
      }

      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        // Reset the previous button's icon
        currentAudio.nextElementSibling.innerHTML = `<img src="./src/assets/icons/play.png" alt="Play">`;
      }

      if (audio.paused) {
        audio.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
        currentButton.innerHTML = `<img class="singer__playlist-icon" src="./src/assets/icons/pause.png" alt="Pause">`;
      } else {
        audio.pause();
        currentButton.innerHTML = `<img src="./src/assets/icons/play.png" alt="Play">`;
      }

      currentAudio = audio;
    });
  });
});
