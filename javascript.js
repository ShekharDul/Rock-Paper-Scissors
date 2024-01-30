// The function below returns the computer's choice by using a random number generator
function computerChoice () {
  let options = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor((Math.random() * 3));
  let computerChoice = options[randomNumber];
  return computerChoice;
}


// The code below will be executed when a button is clicked and will call the game function to start a round.
function playRound() {
  let playerSelection = (this.textContent || this.innerText).toLowerCase();
  console.log(playerSelection);
  let computerSelection = computerChoice();
  console.log(computerSelection);
  let result = game(playerSelection, computerSelection);
  if (result == "It is a tie") {
    userPoints = userPoints + 0;
    computerPoints = computerPoints + 0;
  } else if ( result == "You win") {
    userPoints ++;
  } else {
    computerPoints ++;
  }
  updateScore();

  if (userPoints+computerPoints == 5){
    let finalResult = document.getElementById('final-results');
    if(userPoints > computerPoints){
      finalResult.innerText = "You won the previous game :) ";
      updateScore(userPoints = 0, computerPoints = 0);
    } else {
        finalResult.innerText = "You lost the previous game :(";
        updateScore(userPoints = 0, computerPoints = 0);
    }
  }
}

function updateScore() {
  let results = document.getElementById('results');
  results.innerText = "User: " + userPoints + " & " + "Computer: " + computerPoints;
}


function game(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    return 'It is a tie';
  }
  if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
   (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === "scissors" && computerSelection === "paper") ){
    return "You win";
  } else {
    return "You lose";
  };
    
};



let userPoints = 0;
let computerPoints = 0;

// The code below will invoke functions when either of the buttons is clicked.

for (let i = 0; i < 5; i++) {
   

    let rockButton = document.getElementById("rockButton");
    rockButton.addEventListener('click', playRound);

    let paperButton = document.getElementById("paperButton");
    paperButton.addEventListener('click', playRound);

    let scissorsButton = document.getElementById("scissorsButton");
    scissorsButton.addEventListener('click', playRound);

  
}


