let playBtnOBJ = document.querySelectorAll(".hotTracks__cards-card-audio");

playBtnOBJ.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Получаем путь к аудиофайлу из атрибута data-audio
    const audioSrc = button.getAttribute("data-audio");

    // Проверяем, если в кнопке уже есть аудиоинстанция
    if (button.audioInstance) {
      if (button.audioInstance.paused) {
        // Если аудио на паузе, воспроизводим его
        button.audioInstance.play();
      } else {
        // Если аудио воспроизводится, ставим его на паузу
        button.audioInstance.pause();
      }
    } else {
      const audio = new Audio(audioSrc);

      // Останавливаем все текущие аудиофайлы
      document
        .querySelectorAll(".hotTracks__cards-card-audio")
        .forEach((btn) => {
          if (btn.audioInstance) {
            btn.audioInstance.pause();
            btn.audioInstance.currentTime = 0;
            delete btn.audioInstance;
          }
        });

      // Воспроизводим новый аудиофайл
      audio.play();

      // Сохраняем ссылку на аудиофайл в кнопке
      button.audioInstance = audio;

      // Добавляем аудиофайл в DOM, чтобы он мог быть управляем из JS
      document.body.appendChild(audio);

      // Удаляем аудиофайл из DOM после окончания воспроизведения
      audio.addEventListener("ended", () => {
        document.body.removeChild(audio);
        delete button.audioInstance;
      });
    }
  });
});
