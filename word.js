var Letter = require("./letter.js");
var charsUsed = [];
var ltrShow = "";


function Word(word) {
    this.word = word;
    this.lettersArray = [];

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
        console.log("Name of Movie: " + ltrShow);
        console.log("Letters Used: none");
        console.log();
     }
   
    this.getLetters = function(newChar) {
        if (newChar.match(/^[A-Z]*$/)) {
            ltrShow = "";
            var newCharFound = false;
            if (!charsUsed.includes(newChar)) {
                charsUsed.push(newChar);
            }
            for (var i=0; i<this.lettersArray.length; i++) {
                if (newChar === this.lettersArray[i].char) {
                    this.lettersArray[i].guessed = true;
                }
                var letter = this.lettersArray[i].returnWhat();
                ltrShow += letter + " ";
                
            }
            
            console.log("Name of Movie: " + ltrShow);
            console.log("Letters Used: " + charsUsed);
            console.log();
        }
        else {
            console.log("This character is not a letter...");
            console.log();
        }
    }
   
}
module.exports = Word;


/*
for (var i=0; i<word.length; i++){
        var ltrObj = new Letter(word[i]);
        ltrShow = ltrObj.returnWhat();
        if (ltrObj.guessed) {
            charsUsed.push(ltrObj.char);
            console.log("Chars Used #1: " + charsUsed);
            ltrCount++;
        }
        this.lettersArray.push(ltrObj);
        wordStr += ltrShow + " "; 
    }
    console.log(wordStr);
*/


