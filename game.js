class Game {
  constructor() {
    this.player1 = {};
    this.player2 = {};
    this.currentMove = 0;
  }

  takeTurn(position) {
    this.currentMove++;
    if (this.currentMove % 2 !== 0) {
      this.player1.positions.push(position);
      this.checkGame(this.player1);
    } else {
      var position = parseInt(event.target.name);
      this.player2.positions.push(position);
      this.checkGame(this.player2);
    }
  }

  makeNewPlayers() {
    currentGame.player1 = new Player('1', 'x');
    currentGame.player1.retrieveWinsFromStorage();
    currentGame.player2 = new Player('2', 'o');
    currentGame.player2.retrieveWinsFromStorage();
  }

  checkGame(player) {
    updateCurrentPlayerDisplay();
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
        currentPlayerDisplay.innerText = `PLAYER ${player.id} WINS!`
        setTimeout(function(){currentGame.clearGame(); }, 3000);
      } else if (this.currentMove >= 9) {
        updateCurrentPlayerDisplay();
        setTimeout(function(){currentGame.clearGame(); }, 3000);
      } else {
      }
    };
  }

  clearGame() {
    makeNewGame();
    showNewGame();
    refreshGameBoard();
  }
}
