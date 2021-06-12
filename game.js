class Game {
  constructor() {
    this.player1 = {};
    this.player2 = {};
    this.currentMove = 0;
  }

  takeTurn() {
    this.currentMove++;
    if (this.currentMove % 2 !== 0) {
      console.log("in takeTurn if statement move counter-->", this.currentMove);
      var position = parseInt(event.target.name);
      event.target.disabled = true;
      this.player1.positions.push(position);
      this.checkGame(this.player1);
      // currentGame.updateBoard();
      // remove hidden class from the x image of button clicked and disable button.
      // showX();
    } else {
      console.log("in takeTurn else statement move counter-->", currentGame.currentMove);
      var position = parseInt(event.target.name);
      event.target.disabled = true;
      this.player2.positions.push(position);
      this.checkGame(this.player2);
      // currentGame.updateBoard();
      // remove hidden class from the o image of button clicked and disable button.
      // showO();
    }
  }

  updateBoard() {
    var currentGame = gameBoard.innerHTML;
    // this needs to check the current condition of the gameBoard
    // and reassign the currentGame variable to it.
  }

  checkGame(player) {
    var winScenarios = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];
    for (var i = 0; i < winScenarios.length; i++) {
      if (player.positions.includes(winScenarios[i][0])
      && player.positions.includes(winScenarios[i][1])
      && player.positions.includes(winScenarios[i][2])) {
        player.wins++;
        player.saveToStorage();
        console.log("inside check game method/ showing player -->", player);
        currentPlayerDisplay.innerText = `Player ${player.id} Wins!`
        setTimeout(function(){currentGame.clearGame(); }, 3000);
      } else if (this.currentMove >= 9) {
        currentPlayerDisplay.innerText = `Draw!`;
        setTimeout(function(){currentGame.clearGame(); }, 3000);
        }
    };
  }

  clearGame(event) {
    currentPlayerDisplay.innerText = 'New Game, Player 1 is up!';
    makeNewGame(event);
  }

}
