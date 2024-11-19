const correctWord = "WHAM";
let attempts = 0;
let maxAttempts = 6;

const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");
const attemptsDiv = document.getElementById("attempts");
const song = document.getElementById("song");

submitBtn.addEventListener("click", () => {
    const guess = guessInput.value.toUpperCase();
    
    if (guess.length !== 4) {
        alert("Please enter a 4-letter word.");
        return;
    }

    attempts++;
    checkGuess(guess);

    if (guess === correctWord) {
        playSong();
    } else if (attempts === maxAttempts) {
        feedback.innerHTML = "Game over! The word was " + correctWord;
        submitBtn.disabled = true;
    }
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
