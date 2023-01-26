
const buttonPaper = document.getElementById('button-paper');
const buttonRock = document.getElementById('button-rock');
const buttonScissors = document.getElementById('button-scissors');
const result = document.getElementById('result');
let playerScore = 0;
let computerScore = 0;

const PAPER = "papier";
const ROCK = "kamień";
const SCISSORS = "nożyce"

function showResult(argPlyerScore, argComputerScore) {
  result.textContent = playerScore + "-" + computerScore;
}


function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId === 1) {
    return ROCK;
  } else if (argMoveId === 2) {
    return PAPER;
  } else if (argMoveId === 3) {
    return SCISSORS;
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return ROCK;
  }
}


function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove === PAPER && argComputerMove === ROCK) {
    printMessage('Wygrywasz!'); 
    playerScore++
  } else if (argPlayerMove === SCISSORS && argComputerMove === PAPER) {
    printMessage('Wygrywasz!');
    playerScore = playerScore + 1;
  } else if (argPlayerMove === ROCK && argComputerMove === SCISSORS) {
    printMessage('Wygrywasz!');
    playerScore++
  } else if (argPlayerMove === argComputerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz :(');
    computerScore = computerScore + 1;
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
 
}

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  const playerMove = argButtonName;
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
  showResult(playerScore, computerScore)
}

buttonRock.addEventListener('click', function () { buttonClicked(ROCK); });
buttonPaper.addEventListener('click', function () { buttonClicked(PAPER); });
buttonScissors.addEventListener('click', function () { buttonClicked(SCISSORS); });


const a = 4;
const b = 5;
const c = 7;
const d = 2;

function sum(one, two){
const result = one + two;
console.log(result)
}

sum(b, c)
sum(a, b)
sum(a, a)


