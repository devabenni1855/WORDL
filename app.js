<script>
  const targetWord = "WHAM"; // The solution
  const maxAttempts = 6;

  const wordGrid = document.getElementById("word-grid");
  const input = document.getElementById("guess-input");
  const submitBtn = document.getElementById("submit-btn");
  const message = document.getElementById("message");
  const videoContainer = document.getElementById("video-container");
  const videoFrame = document.getElementById("wham-video");

  let attempts = 0;

  function createGrid() {
    for (let i = 0; i < maxAttempts * 4; i++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      wordGrid.appendChild(tile);
    }
  }

  function updateGrid(guess) {
    const startIdx = attempts * 4;
    for (let i = 0; i < 4; i++) {
      const tile = wordGrid.children[startIdx + i];
      tile.textContent = guess[i];
      if (guess[i] === targetWord[i]) {
        tile.classList.add("correct");
      } else if (targetWord.includes(guess[i])) {
        tile.classList.add("present");
      } else {
        tile.classList.add("absent");
      }
    }
  }

  function playWhamVideo() {
    videoFrame.src = "https://www.youtube.com/embed/E8gmARGvPlI?autoplay=1";
    videoContainer.style.display = "block";
  }

  function handleSubmit() {
    const guess = input.value.toUpperCase();
    if (guess.length !== 4) {
      message.textContent = "Enter a 4-letter word!";
      return;
    }

    updateGrid(guess);
    attempts++;

    if (guess === targetWord) {
      message.textContent = "🎉 You guessed it! The word is " + targetWord;
      submitBtn.disabled = true;
      input.disabled = true;
      playWhamVideo();
    } else if (attempts === maxAttempts) {
      message.textContent = "😢 Out of attempts! The word was " + targetWord;
      submitBtn.disabled = true;
    } else {
      message.textContent = "Keep trying!";
    }

    input.value = "";
    input.focus();
  }

  submitBtn.addEventListener("click", handleSubmit);

  createGrid();
</script>
