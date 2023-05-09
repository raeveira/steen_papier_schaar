let playerScore = 0;
let computerScore = 0;
let playerScoreSpan = document.getElementById("player-score");
let computerScoreSpan = document.getElementById("computer-score");
let resultDiv = document.getElementById("result");

document.getElementById("rock-button").addEventListener("click", function() {
  play("rock");
});

document.getElementById("paper-button").addEventListener("click", function() {
  play("paper");
});

document.getElementById("scissors-button").addEventListener("click", function() {
  play("scissors");
});

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

function updateScore(result) {
  if (result === 'win') {
    playerScore++;
  } else if (result === 'lose') {
    computerScore++;
  }
  playerScoreSpan.innerHTML = playerScore;
  computerScoreSpan.innerHTML = computerScore;
}