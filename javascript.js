function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors'];
  let choice = Math.floor((Math.random() * 2)+1);
  return options[choice];
}



function game(){
  let playerSelection = prompt("Type Rock, paper or scissors?").toLowerCase();

  let computerSelection = getComputerChoice();


  function playGround(computerSelection, playerSelection) {
    console.log("The computer chose " +computerSelection);
    console.log("You chose " + playerSelection);

    if ( playerSelection === computerSelection) {
      console.log("It is a tie!");
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("You win")
        let result = "You win"
        return result
    } else {
      console.log("You lose")
      return "You lose";
    }
  }
  return playGround(playerSelection, computerSelection);
}

let userPoints = 0;
let computerPoints = 0;

for ( i = 0 ; i < 5; i++) {
  let result = game();
  if (result === "You win"){
    userPoints++;
  } else {
    computerPoints++;
  }
}

console.log("The user scored a total of " + userPoints + " points");
console.log("The computer scored a total of  " + computerPoints + " points");

if (userPoints>computerPoints) {
  console.log("You win the game!")
} else {
  console.log("Sorry you lost the game");
}

