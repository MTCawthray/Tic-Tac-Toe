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
var gameBoard = document.querySelector('.game-board');
var currentPlayerDisplay = document.querySelector('.current-player');

var winScenarios = [];
var currentMove;
var currentPlayer;


//------ Event Listeners -------//
window.addEventListener('load', function(event) {
  clearGame(event)});
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
clearGame(event) {
  event.preventDefault();
  currentPlayerDisplay.innerText = 'New Game! X is up.';
}
