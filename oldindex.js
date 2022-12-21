function getComputerChoice() {
  let result = Math.floor(Math.random() * 3);
  /*  switch (result) {
    case result === 0:
      choice = 'rock';
      break;
    case result === 1:
      choice = 'paper';
      break;
    case result === 2:
      choice = 'scissor';
      break;
  }
} */
  if (result === 0) {
    return 'rock';
  } else if (result === 1) {
    return 'paper';
  } else if (result === 2) {
    return 'scissor';
  }
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return 'It´s a tie!';
  }
  if (playerSelection === 'rock')
    if (computerSelection === 'paper') {
      return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
      return `You win! ${playerSelection} beats ${computerSelection}!`;
    }

  if (playerSelection === 'paper')
    if (computerSelection === 'scissor') {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    }

  if (playerSelection === 'scissor')
    if (computerSelection === 'rock') {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    }
};

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
/* const playerSelection = () => {
  let input = prompt('Type Rock, Paper or Scissor');
  input = input.toLowerCase();
}; */
console.log('You threw: ' + playerSelection);
console.log('Computer threw: ' + computerSelection);
console.log(playRound(playerSelection, computerSelection));

const game = () => {
  for (let i = 1; i <= 5; i++) {
    console.log(playRound(playerSelection, computerSelection));
  }
};
console.log(game);
