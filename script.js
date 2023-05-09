let playerScore = 0;
let computerScore = 0;
let playerScoreSpan = document.getElementById("player-score");
let computerScoreSpan = document.getElementById("computer-score");
let resultDiv = document.getElementById("result");

// Get buttons into js
document.getElementById("rock-button").addEventListener("click", function() {
  play("rock");
});

document.getElementById("paper-button").addEventListener("click", function() {
  play("paper");
});

document.getElementById("scissors-button").addEventListener("click", function() {
  play("scissors");
});

// Computer handler
function play(playerChoice) {
  let computerChoice = computerPlay();
  let result = getResult(playerChoice, computerChoice);
  displayResult(result, playerChoice, computerChoice);
  updateScore(result);
}

function computerPlay() {
  let choices = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Different combinations (win/lose)
function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'tie';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

// Show result
function displayResult(result, playerChoice, computerChoice) {
  let resultText = '';
  if (result === 'win') {
    resultText = 'You win!';
  } else if (result === 'lose') {
    resultText = 'You lose!';
  } else {
    resultText = "It's a tie!";
  }
  resultDiv.innerHTML = `${resultText} You chose ${playerChoice}, computer chose ${computerChoice}.`;
}

//Updates the scoreboard either won or lost.
function updateScore(result) {
  if (result === 'win') {
    playerScore++;
  } else if (result === 'lose') {
    computerScore++;
  }
  playerScoreSpan.innerHTML = playerScore;
  computerScoreSpan.innerHTML = computerScore;
}
