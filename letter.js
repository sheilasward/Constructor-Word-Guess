
function Letter(char) {
    this.char = char;
    this.guessed = false;
    this.isLetter = false;

    this.returnWhat = function() {
        if (this.guessed) {
            return this.char;
        }
        else {
            return "_";
        }
    }

    this.checkIt = function(charsUsed) {
        if (this.char.match(/^[A-Z]*$/)) {
            this.isLetter = true;
            if (charsUsed.includes(this.char)) {
                this.guessed = true;
                console.log(this.char + " has already been used");
            }
            else {
                this.guessed = false;
            }
        }
        else {
            this.guessed = true;
        }
    }
}
module.exports = Letter;
