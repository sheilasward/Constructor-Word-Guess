var Letter = require("./letter.js");
var charsUsed = [];
var ltrShow = "";
const red = "\x1b[31m%s\x1b[0m";
const green = "\x1b[32m%s\x1b[0m";

function Word(word) {
    this.word = word;
    this.lettersArray = [];
    this.guessesRemaining = 12;

    this.initialize = function() {
        ltrShow = "";
        charsUsed = [];
        for (var i=0; i<word.length; i++) {
            var ltrObj = new Letter(word[i]);
            ltrObj.checkIt(charsUsed);
            var letter = ltrObj.returnWhat();
            ltrShow += letter + " ";
            this.lettersArray.push(ltrObj);
        }
        console.log();
        console.log(ltrShow);
        console.log();
        console.log();
        console.log("Letters Used: none");
        console.log("Guesses Remaining: " + this.guessesRemaining);
     }
   
    this.getLetters = function(newChar) {
        var newCharFound = false;
        if (newChar.match(/^[A-Z]*$/)) {  // newChar is a letter
            ltrShow = "";
            if (!charsUsed.includes(newChar)) {  // newChar has not been used before
                charsUsed.push(newChar);
                for (var i=0; i<this.lettersArray.length; i++) {
                    if (newChar === this.lettersArray[i].char) {
                        newCharFound = true;
                        this.lettersArray[i].guessed = true;
                    }
                    var letter = this.lettersArray[i].returnWhat();
                    ltrShow += letter + " ";
                }
                if (!newCharFound) {
                    this.guessesRemaining--;
                    console.log();
                    console.log(red, "Incorrect!!");
                }
                else {
                    console.log();
                    console.log(green, "Correct!!");
                }
                console.log();
                console.log(ltrShow);
                console.log();
                console.log();
                console.log("Guesses Remaining: " + this.guessesRemaining);
                console.log("Letters Used: " + charsUsed);
                console.log();
            }
            else {
                console.log();
                console.log(red, "This letter has already been used...");
            }
        }
        else {
            console.log();
            console.log(red, "This character is not a letter...");
        }
    }
}
module.exports = Word;