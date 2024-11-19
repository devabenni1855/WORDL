document.addEventListener("DOMContentLoaded", () => {
  const targetWord = "WHAM"; // The correct word
  const audioElement = document.getElementById("wham-audio"); // Reference to the audio element
  const inputField = document.getElementById("guess-input");
  const submitButton = document.getElementById("submit-button");
  const resultMessage = document.getElementById("result-message");

  let attempts = 0;

  submitButton.addEventListener("click", () => {
    const guess = inputField.value.toUpperCase();
    attempts++;

    if (guess === targetWord) {
      resultMessage.textContent = "Congratulations! You guessed it!";
      audioElement.play(); // Play the MP3 file
    } else if (attempts >= 6) {
      resultMessage.textContent = `Game Over! The correct word was ${targetWord}.`;
    } else {
      resultMessage.textContent = "Try again!";
    }
  });
});

function checkGuess(guess) {
    let result = "";

    for (let i = 0; i < 4; i++) {
        if (guess[i] === correctWord[i]) {
            result += `<span style="color: green;">${guess[i]}</span>`; // Correct letter in the correct position
        } else if (correctWord.includes(guess[i])) {
            result += `<span style="color: orange;">${guess[i]}</span>`; // Correct letter in the wrong position
        } else {
            result += `<span style="color: red;">${guess[i]}</span>`; // Incorrect letter
        }
    }

    feedback.innerHTML = result;
    attemptsDiv.innerHTML = `Attempts: ${attempts}/${maxAttempts}`;
    guessInput.value = "";
}

function playSong() {
    song.play();
    feedback.innerHTML = "Correct! Your song is playing now.";
}
