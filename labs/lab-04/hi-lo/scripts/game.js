/* Get HTML Elements as JS objects */
const button = document.getElementById("guess-button");
const number = document.getElementById("guess-text");
const attemptsView = document.getElementById("attempts");
const cluesView = document.getElementById("clues");

/* Add Event Listener to button with callback function*/
button.addEventListener("click", guessNumber);

/* Hi-Lo Game Data*/
const passcode = Math.floor( Math.random() * 1000 );
let tries = 10;

/* Callback function for event: Button click */
function guessNumber() {
    const guess = number.value;
    tries--;
    attemptsView.innerHTML = `Number of attempts left: ${tries}`;
    if ( guess == passcode){
        console.log(`You win! Got it in ${10-tries} attempts`);
    }
    else if (tries < 0){
        console.log(`You lose! The passcode was ${passcode}`);
    }
    else{
        giveClue(guess)
    }
}

/*Give Clue */
function giveClue(guess){   
    if (guess > passcode){
        console.log(`${guess} is too High!`);
    }
    else{
        console.log(`${guess} is too Low!`);
    }
}