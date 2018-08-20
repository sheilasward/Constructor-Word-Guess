var Word = require("./word");
var inquirer = require("inquirer");
var movies = ["THE SHAWSHANK REDEMPTION", "THE GODFATHER", "GLADIATOR", "AMADEUS", "THE SILENCE OF THE LAMBS", "THE ROCK", "MURDER ON THE ORIENT EXPRESS", "INDEPENDENCE DAY", "GOLDFINGER", "FORREST GUMP", "THE BOURNE IDENTITY", "STAR WARS: EPISODE V - THE EMPIRE STRIKES BACK", "PATRIOT GAMES", "PATTON", "MEN IN BLACK", "THE GOOD, THE BAD, AND THE UGLY", "NATIONAL TREASURE", "TRUE LIES", "APOLLO 13", "BACK TO THE FUTURE PART II", "IRON MAN", "ASSASSINS"];
var word;
var movieIndex = 0;
const red = "\x1b[31m%s\x1b[0m";
const green = "\x1b[32m%s\x1b[0m";

playGame();

function playGame() {
    movieIndex = Math.floor(Math.random()*movies.length);
    word = new Word(movies[movieIndex]);
    word.initialize();
    getLetters();
}

function getLetters() {
    var falseFound = false;
    for(var i = 0; i < word.lettersArray.length; i++) {
        if (!word.lettersArray[i].guessed) {
            falseFound = true;
            break;  // if you find one 'false' you continue with the game
        }
    }

    if (falseFound) {
        console.log();
        inquirer.prompt([
            {
                name: "newLetter",
                message: "Guess a letter: "
            }
        ]).then (function(answers) {
            var newChar = answers.newLetter.toUpperCase();
            word.getLetters(newChar);
            if (word.guessesRemaining < 1) {
                console.log(red, "Sorry, you lost... The correct movie is " + word.word);
                console.log();
                endGame();
            }
            else {
                getLetters();
            }
        });
        
    }
    else {
        console.log(green, "Congratulations!! You won the game!");
        console.log();
        endGame();
    }

}


function endGame() {
    movies.splice(movieIndex, 1);
    if (movies.length < 1) {
        console.log("You have now played all of the games.\nYou must restart game to play again...");
    }
    else {
        inquirer.prompt([
            {
                name: "newGame",
                message: "Play Another Game (Y/N)?"
            }
        ]).then (function(answers) {
            if (answers.newGame.toUpperCase() === 'Y') {
                playGame();
            }
        });
    }
}



