#Hangman game word guess game
#Stephen Thompson \^/
#
#This is a Hangman style game where the user will guess 
Use key and click events to interact with the player.

 Display instructions and interface on page
 
 Create an array of words:
    - words up to 9 letters
    - 9 words in the array


 Set number of guesses allowed
     set guesses to 15
     create a function to track user gusses


 Track guesses remaining
        cr

 Track letters that are guessed
    if user picks letter incorrect letter, that letter needs to be tracked and displayed

    if user picks correct letter that letter displays in current word 

 track wins
 create function to show wins after game is done, if user runs out of gusses and does not win; do not add to wins.

 after win or loss; game resets


 ==========================
 Word array, nine word array, words upto nine letters:
    currWord = [abc, abcd, abcde, abcdef, abcdefg, abcdefgh, abcdefghi, aabbccdd, xxyyzz];

    numGuess = 0;
    numGuessRm = 15;

    ltGuess;

    randomly select a word within currWord array

    If ltGuess = letter in random word choice the display on screen
        else if ltGuess != letter in random word chose then numGuessRm - 1 upto 15
        

    for every wrong guess numGuessRm - 1 until 15 is reached;

    for every correct letter based on array data, show letter;
    





