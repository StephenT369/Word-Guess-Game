//Stephen Thompson \^/

var guessGame = {
    currWord:
        ['sun', 'mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus']
        [Math.floor(Math.random()*
        ['sun', 'mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus']
        .length)],
    numGuess: 0,
    numGuessRm: 15,
    currWordSpt: function(){
        document.write(this.currWord);
    },
    currWordBlanks: function(){
        var ansKey = [];
        for (var a = 0; a < this.currWord.length; a++) {
            ansKey[a] = " _ ";
        };
        document.write(ansKey.join('&nbsp'));
        console.log(ansKey.join(' '))
    }



};

   
    console.log(guessGame.currWord);
    guessGame.currWordSpt();
    guessGame.currWordBlanks();



