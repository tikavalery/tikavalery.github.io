//Setting variables and zeroing counters 
var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var ranLetter = ranLetter;
var letters = "qwertyuiopasdfghjklzxcvbnm"

//creating computer random guess

ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);

//Using random whole number generated above to select a random letter from the array [letters] and assigns it to the var ranLetter
function jsGuess() {
      ranLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(ranLetter);

}

//CAPTURING THE PLAYERS INPUT
//.onkeyup captures the players input as playerGuess
document.onkeyup = function (event) {
      var playerGuess = event.key;

      // Logic for correct guess
      //test if players guess equals ranLetter, if true it increments wins by 1, and clears used letters array.
      if (playerGuess === ranLetter) {
            won++;
            attempts = 10;
            usedArray = [];

      }

      //logic for incorrect guess
      //tests if players guess Does Not Equal ranLetter and decriments attempts by 1
      jsGuess();
      if (playerGuess !== ranLetter) {
            attempts--;

      }

      //when remaining attempts equals zero, lost is incrimented by 1; attempts is reset to 10, and used letters array is cleared
      if (attempts == 0) {
            lost++;
            usedArray = []
            attempts = 10;
      }

      //HANDELING INCORRECT GUESSES - OUTPUT
      //this 'if' prevents a letter selected a 2nd time from being written to the usedArray again, although it still counts as a guess
      if (usedArray.indexOf(playerGuess) >= 0) {

      } else {
            //this pushes the players incorrect guess to the usedArray and writes it to the HTML
            usedArray.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = usedArray;
            console.log(usedArray);

      }
      //OUTPUT TO HTML
      //these statements write the values/scores generated to the HTML
      document.getElementById('won').innerHTML = won;
      document.getElementById('lost').innerHTML = lost;
      document.getElementById('attempts').innerHTML = attempts;

}