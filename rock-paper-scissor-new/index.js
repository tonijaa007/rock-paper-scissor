const userChoiceDisplay = document.getElementById('userChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultDisplay = document.getElementById('displayResult');
const possibleChoices = document.querySelectorAll('img');
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
    userChoiceDisplay.innerHTML = userChoice;
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
  computerChoiceDisplay.textContent = computerChoice;
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
  resultDisplay.innerHTML = result;
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
  for (let i = 0; i <= 5; i++) {
    if (computerScore === 5) {
      endResultDisplay.innerHTML = 'You won the game!';
      disableButtons();
    }
    if (playerScore === 5) {
      endResultDisplay.innerHTML = 'The computer won the game!';
      disableButtons();
    }
  }
}
