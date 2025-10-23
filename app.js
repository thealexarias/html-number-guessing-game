console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

function guessingGame(min, max, userGuess){
let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
// const userGuess = prompt("Please enter a number from 1 - 100: ");
if (isNaN(userGuess) || userGuess < 1 || userGuess > 100){ //come back and make sure userGuess can't be a decimal
return "Invalid response"
}
else if(userGuess < randomNumber){
    return "Guess a higher number"
}
else if(userGuess > randomNumber){
    return "Guess a lower number"
}
else if (userGuess === randomNumber){
    return "Guessed the correct number"
}
}



console.log(guessingGame(1,100,))