const userChoiceDisplay = document.getElementById('userChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultDisplay = document.getElementById('displayResult');
const possibleChoices = document.querySelectorAll('button');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const endResultDisplay = document.getElementById('endResult');

let userChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML =
      userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    generateComputerChoice();
    getResult();
    getEndResult();
  }),
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);

  if (randomNumber === 0) {
    computerChoice = 'rock';
  }
  if (randomNumber === 1) {
    computerChoice = 'paper';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissor';
  }
  computerChoiceDisplay.textContent =
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!';
  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
    playerScore += 1;
    result = 'you win!';
  }
  if (computerChoice === 'rock' && userChoice === 'scissor') {
    computerScore += 1;

    result = 'you lost!';
  }
  if (computerChoice === 'paper' && userChoice === 'scissor') {
    playerScore += 1;

    result = 'you win!';
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    computerScore += 1;

    result = 'you lose!';
  }
  if (computerChoice === 'scissor' && userChoice === 'rock') {
    playerScore += 1;

    result = 'you win!';
  }
  if (computerChoice === 'scissor' && userChoice === 'paper') {
    computerScore += 1;

    result = 'you lose!';
  }
  resultDisplay.innerHTML = result.charAt(0).toUpperCase() + result.slice(1);
  playerScoreDisplay.innerHTML = playerScore;
  computerScoreDisplay.innerHTML = computerScore;
  console.log(computerScore, 'player');
  console.log(playerScore, 'player');
}

function disableButtons() {
  possibleChoices.forEach((elem) => {
    elem.disabled = true;
  });
}

function getEndResult() {
  if (playerScore === 5) {
    endResultDisplay.innerHTML = `You won the game!
      Please reload the page to play again`;
    disableButtons();
  }
  if (computerScore === 5) {
    endResultDisplay.innerHTML = `The computer won the game!
      Please reload the page to play again`;
    disableButtons();
  }
}
