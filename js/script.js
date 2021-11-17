//Create Global Variables

const guessedLetters = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
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
