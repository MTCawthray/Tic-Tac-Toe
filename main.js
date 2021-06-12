// ------Variables----- //
var topLeftBtn = document.querySelector('#a1')
var xIcon1 = document.querySelector('#xIconA1');
var oIcon1 = document.querySelector('#oIconA1');
var topCenterBtn = document.querySelector('#a2');
var topRightBtn = document.querySelector('#a3');
var centerLeftBtn = document.querySelector('#b1');
var centerBtn = document.querySelector('#b2');
var centerRightBtn = document.querySelector('#b3');
var bottomLeftBtn = document.querySelector('#c1');
var bottomCenterBtn = document.querySelector('#c2');
var bottomRightBtn = document.querySelector('#c3');
var gameBoard = document.querySelector('#gameBoard');
var player1WinCount = document.querySelector('#player1WinCount');
var player2WinCount = document.querySelector('#player2WinCount');
var currentPlayerDisplay = document.querySelector('#currentPlayer');

var currentGame;

//------ Event Listeners -------//
window.addEventListener('load', function(event) {
  makeNewGame(event)});

topLeftBtn.addEventListener('click', makeMove);
topCenterBtn.addEventListener('click', makeMove);
topRightBtn.addEventListener('click', makeMove);
centerLeftBtn.addEventListener('click', makeMove);
centerBtn.addEventListener('click', makeMove);
centerRightBtn.addEventListener('click', makeMove);
bottomLeftBtn.addEventListener('click', makeMove);
bottomCenterBtn.addEventListener('click', makeMove);
bottomRightBtn.addEventListener('click', makeMove);





//-------- Functions --------//
function makeMove(){
  currentGame.takeTurn();
}

function makeNewGame(event) {
  event.preventDefault();
  currentGame = new Game();
  makeNewPlayers();
  updateWinDisplay();
  currentPlayerDisplay.innerText = 'New Game, Player 1 is up!';
  console.log("player 1 ", currentGame.player1);
  console.log("player 2 ", currentGame.player2);
}

function showX(event) {
    if(event.target.classList.contains('x-icon')) {
      event.target.classList.remove('hidden');
    }
  }

function showO(event) {
  if(event.target.classList.contains('o-icon')) {
    event.target.classList.remove('hidden');
  }
}
function updateWinDisplay() {
  debugger
  player1WinCount.innerText = `Wins:${currentGame.player1.wins}`
  player2WinCount.innerText = `Wins:${currentGame.player2.wins}`
}

function makeNewPlayers() {
  currentGame.player1 = new Player('1', 'x');
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2 = new Player('2', 'o');
  currentGame.player2.retrieveWinsFromStorage();
}
