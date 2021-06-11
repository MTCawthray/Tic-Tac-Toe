// ------Variables----- //
var topLeftBtn = document.querySelector('#a1');
var topCenterBtn = document.querySelector('#a2');
var topRightBtn = document.querySelector('#a3');
var centerLeftBtn = document.querySelector('#b1');
var centerBtn = document.querySelector('#b2');
var centerRightBtn = document.querySelector('#b3');
var bottomLeftBtn = document.querySelector('#c1');
var bottomCenterBtn = document.querySelector('#c2');
var bottomRightBtn = document.querySelector('#c3');
var gameBoard = document.querySelector('#gameBoard');
var currentPlayerDisplay = document.querySelector('#currentPlayer');

var winScenarios = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
var currentMove;
var currentGame;


//------ Event Listeners -------//
window.addEventListener('load', function(event) {
  newGame(event)});
topLeftBtn.addEventListener('click', '');
topCenterBtn.addEventListener('click', '');
topRightBtn.addEventListener('click', '');
centerLeftBtn.addEventListener('click', '');
centerBtn.addEventListener('click', '');
centerRightBtn.addEventListener('click', '');
bottomLeftBtn.addEventListener('click', '');
bottomCenterBtn.addEventListener('click', '');
bottomRightBtn.addEventListener('click', '');





//-------- Functions --------//
function takeTurn() {



}

function newGame(event) {
  event.preventDefault();
  var player1 = new Player(1, x);
  var player2 = new Player(2, o);
  currentGame = new Game(player1, player2);
  currentPlayerDisplay.innerText = 'New Game, Player 1 is up!';
}

function switchPlayer() {

}
