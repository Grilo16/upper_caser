const UpperCaser = function (words) {
    this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
    return this.words.map((word) => {

        return word.split("").map((char) => {
            
          return String.fromCharCode(char.charCodeAt(0)-32)

        })
        .reduce((word, char)=>{

            return word + char
        }); 
    });
    
}
module.exports = UpperCaser;
