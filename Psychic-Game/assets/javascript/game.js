
// This function is run whenever the user presses a key.

var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];

// Variables and DOM selectors - we use these to keep track of wins and losses
// as well as insert the new wins and losses count into the HTML document or DOM
// The total number of guesses is also here

var wins = 0;
var winText = document.getElementById('wins-text');
var losses = 0;
var lossesText = document.getElementById('losses-text');
var randomLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
var guessesRemaining = 10;
var guessText = document.getElementById('number-of-guesses');

// This is a seperate function outside of the keyup event that we can call anywhere we
// want to reset the number of guesses. I did it this way so we can say to reset the number of
// wether we win or lose based on the different logic

function resetGuesses() {
    guessesRemaining = 10;
    return guessesRemaining;
}

// this will log the very first random winning letter that is created
console.log(randomLetter);

// usually you would just put a DOM event on the actual document but this is ok because you're learning
document.onkeyup = function (event) {

    var userGuess = event.key;
    var guessesSoFar = document.getElementById("guessesSoFar");
    var letter = document.createElement("div");
    letter.textContent = event.key;
    guessesSoFar.appendChild(letter);

    // this is the winning scenario - if the key pressed is correct, alert you win
    // reset the number of guesses, create a new random letter
    if (userGuess === randomLetter) {
        wins++;
        winText.textContent = wins;
        alert("You Win!");
        resetGuesses();
        // newRandomLetter();
        randomLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
        console.log(randomLetter);
        return randomLetter;
        // this comment is for the else statement
        // the else basically says that if the key pressed does not match the winning key
        // then bring down the number of guesses by 1 and change the text in the number of guesses
        // to the new number of guesses 
        // guessesRemaining-- is the same as guessesRemaining = guessesRemaining - 1
        // this works with addition as well so it works the same with wins++ and losses ++
    } else {
        guessesRemaining--;
        guessText.textContent = guessesRemaining;
    }

    // this is the losing case scenario - if the key pressed doesnt match and the number of guesses
    // is 0 or less, alert you lose, rest the guess count, create a new random letter
    if (userGuess !== randomLetter && guessesRemaining <= 0) {
        losses++;
        lossesText.textContent = losses;
        alert("You lose!")
        resetGuesses();
        // newRandomLetter();
        randomLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
        console.log(randomLetter);
        return randomLetter;
    }
}
