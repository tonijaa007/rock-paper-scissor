const userChoiceDisplay = document.getElementById('userChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultDisplay = document.getElementById('displayResult');
const possibleChoices = document.querySelectorAll('button, img');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
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
    result = 'you win!';
  }
  if (computerChoice === 'rock' && userChoice === 'scissor') {
    result = 'you lost!';
  }
  if (computerChoice === 'paper' && userChoice === 'scissor') {
    result = 'you win!';
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'you lose!';
  }
  if (computerChoice === 'scissor' && userChoice === 'rock') {
    result = 'you win!';
  }
  if (computerChoice === 'scissor' && userChoice === 'paper') {
    result = 'you lose!';
  }
  resultDisplay.innerHTML = result;
}
