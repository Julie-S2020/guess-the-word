//Create Global Variables

const guessedLettersElement = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span"); 
const message = document.querySelector(".message");
const platAgainButton = document.querySelector(".play-again");
const word = "magnolia"; 
const guessedLetters = [];

//Write a Function to Add Placeholders for Each Letter

const wordToGuess = function (word) {
    const wordToGuessLetters = [];
    for (const letter of word) {
        console.log(letter);
       wordToGuessLetters.push("●"); 
    }
    
   wordInProgress.innerText = wordToGuessLetters.join("");    
};

wordToGuess(word);

//Add an Event Listener for the Button


button.addEventListener("click", function(e) {
    e.preventDefault();
    message.innerText = "";
    const guess = letterInput.value;
    const goodGuess = inputValue(guess);

    if (goodGuess) {
        makeGuess(guess);
    }
    
    letterInput.value = "";
    
});

//Create a Function to Check Player’s Input

function inputValue(input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter only 1 letter at a time.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
    }
    else {
        return input;
    }
}

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter. Try again.";
 }    else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        guessedLettersDisplay();
        updateWordInProgress(guessedLetters);
    }
};

const guessedLettersDisplay = function () {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
      if (guessedLetters.includes(letter)) {
        revealWord.push(letter.toUpperCase());
      } else {
        revealWord.push("●");
      }
    }
    // console.log(revealWord);
    wordInProgress.innerText = revealWord.join("");
    checkIfWin();
  };

  const checkIfWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
      message.classList.add("win");
      message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
  };