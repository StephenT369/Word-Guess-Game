//Stephen Thompson \^/

var guessGame = {

    words: ['sun', 'mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus'],
    numGuessRm: 15,
    wins: 0,
    blanks: 0,
    randomLt: '',
    wordSpt: [],
    wrongLt: [],
    blkLet: [],

    startGame: function(){
        guessGame.randomLt = guessGame.words[Math.floor(Math.random() * guessGame.words.length)];
        
        guessGame.wordSpt = guessGame.randomLt.split('');
            
        guessGame.blanks = guessGame.wordSpt.length;
        
        for (var l = 0; l < guessGame.blanks; l++) {
            guessGame.blkLet.push("_");
        }
        
        document.getElementById('current-word').innerHTML = ' ' + guessGame.blkLet.join('  ');

        console.log(guessGame.randomLt);
        console.log(guessGame.wordSpt);
        console.log(guessGame.blanks);
        console.log(guessGame.blkLet);

        guessGame.checkInput();
    },

    checkGuess: function(letter){

        var wordLt = false;

        for (var l = 0; l < guessGame.blanks; l++){
            if (guessGame.randomLt[l] == letter){
                wordLt = true;
            }
        };

        if (wordLt) {
            for (var l = 0; l < guessGame.blanks; l++){
                if(guessGame.randomLt[l] == letter){
                    guessGame.blkLet[l] = letter;
                }
            }
        }
        
        else {
            guessGame.wrongLt.push(letter);
            guessGame.numGuessRm--;
        };

        console.log(guessGame.blkLet);
    },

    proGuess: function(){
        console.log('wins: ' + guessGame.wins + '| guesses left: ' + guessGame.numGuessRm );

        if(guessGame.wordSpt.toString() == guessGame.blkLet.toString()){
            guessGame.wins++;
            guessGame.restart();
            document.getElementById('show-wins').innerHTML = ' ' + guessGame.wins;
        } else if (guessGame.numGuessRm === 0) {
            guessGame.restart();
        }

        document.getElementById('current-word').innerHTML = ' ' + guessGame.blkLet.join(' ');
        document.getElementById('guesses-remaining').innerHTML = ' ' + guessGame.numGuessRm;

    },

    checkInput: function(){
        document.onkeyup = function (event){
            var guess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
            
            guessGame.checkGuess(guess);
            guessGame.proGuess();
            console.log(guess);
            document.getElementById('letters-guessed').innerHTML = ' ' + guessGame.wrongLt.join(' '); 
        }
    },

    restart: function(){
    guessGame.numGuessRm = 15;
    guessGame.wrongLt = [];
    guessGame.blkLet = [];
    guessGame.startGame();
}
};
guessGame.startGame();