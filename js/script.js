//Create Global Variables

const guessedLetters = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesDisplay = document.querySelector(".remaining span"); 
const messages = document.querySelector(".message");
const platAgainButton = document.querySelector(".play-again");
const word = "magnolia"; 

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
    const guessInput = letterInput.value;
    console.log(guessInput);
    letterInput.value = "";
    messages.innerText = "";
    
});

//Create a Function to Check Player’s Input

const inputValue = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        messages.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        messages.innerText = "Please enter only 1 letter at a time.";
    } else if (!input.match(acceptedLetter)) {
        messages.innerText = "Please enter a letter from A to Z.";
    }
    else {
        return input;
    }
};
