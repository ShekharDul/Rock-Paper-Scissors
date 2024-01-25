function getComputerChoice() {
  let options = ['Rock', 'Paper', 'Scissors'];
  let choice = Math.floor((Math.random() * 2)+1);
  console.log(options[choice]);
}

getComputerChoice();