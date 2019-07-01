//Stephen Thompson \^/

var guessGame = {

    words: ['sun', 'mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus'],
    numGuessRm: 0,
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
        
        guessGame.numGuessRm = guessGame.wordSpt.length;

        for (var l = 0; l < guessGame.blanks; l++) {
            guessGame.blkLet.push("_");
        }
        
        document.getElementById('current-word').innerHTML = ' ' + guessGame.blkLet.join('  ');

        document.getElementById('guesses-remaining').innerHTML = ' ' + guessGame.numGuessRm;

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
        }; 
        
        if (!wordLt){
            if(!guessGame.wrongLt.includes(letter)){
                guessGame.wrongLt.push(letter);
                guessGame.numGuessRm--;
            };
        };

        console.log(guessGame.blkLet);
    },

    planetGuess: function () {
        if (guessGame.randomLt === guessGame.words[0]){
            document.getElementById('planet').src = './assets/images/sun.jpg';
        }

        else if (guessGame.randomLt === guessGame.words[1]){
            document.getElementById('planet').src = './assets/images/mercury.jpg';
        }

        else if (guessGame.randomLt === guessGame.words[2]){
            document.getElementById('planet').src = './assets/images/venus.jpg';
        }

        else if (guessGame.randomLt === guessGame.words[3]){
            document.getElementById('planet').src = './assets/images/earth.jpg';
        }

        else if (guessGame.randomLt === guessGame.words[4]){
            document.getElementById('planet').src = './assets/images/moon.jpg';
        }

        else if (guessGame.randomLt === guessGame.words[5]){
            document.getElementById('planet').src = './assets/images/mars.jpg';
        }

        else if (guessGame.randomLt === guessGame.words[6]){
            document.getElementById('planet').src = './assets/images/jupiter.jpg';
        }

        else if (guessGame.randomLt === guessGame.words[7]){
            document.getElementById('planet').src = './assets/images/saturn.jpg';
        }

        else if (guessGame.randomLt === guessGame.words[8]){
            document.getElementById('planet').src = './assets/images/uranus.jpg';
        }





    },

    proGuess: function(){
        console.log('wins: ' + guessGame.wins + '| guesses left: ' + guessGame.numGuessRm );

        if(guessGame.wordSpt.toString() == guessGame.blkLet.toString()){
            guessGame.wins++;
            guessGame.planetGuess();
            guessGame.restart();
            document.getElementById('show-wins').innerHTML = ' ' + guessGame.wins;
        } else if (guessGame.numGuessRm === 0) {
            document.getElementById('planet').src = '';
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
        
    guessGame.wrongLt = [];
    guessGame.blkLet = [];
    guessGame.startGame();
}
};
guessGame.startGame();