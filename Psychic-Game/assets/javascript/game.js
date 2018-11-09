

var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];



var wins = 0;
var winText = document.getElementById('wins-text');
var losses = 0;
var lossesText = document.getElementById('losses-text');
var randomLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
var guessesRemaining = 10;
var guessText = document.getElementById('number-of-guesses');



function resetGuesses() {
    guessesRemaining = 10;
    return guessesRemaining;
}


console.log(randomLetter);


document.onkeyup = function (event) {

    var userGuess = event.key;
    var guessesSoFar = document.getElementById("guessesSoFar");
    var letter = document.createElement("div");
    letter.textContent = event.key;
    guessesSoFar.appendChild(letter);

    
    if (userGuess === randomLetter) {
        wins++;
        winText.textContent = wins;
        alert("You Win!");
        resetGuesses();
       
        randomLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
        console.log(randomLetter);
        return randomLetter;
       
    } else {
        guessesRemaining--;
        guessText.textContent = guessesRemaining;
    }

    
    if (userGuess !== randomLetter && guessesRemaining <= 0) {
        losses++;
        lossesText.textContent = losses;
        alert("You lose!")
        resetGuesses();
        
        randomLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
        console.log(randomLetter);
        return randomLetter;
    }
}
