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
    gameBoard.innerHTML = `
    <div class="a-row">
      <button type="button" class="a1" id="a1" name="1"></button>
      <button type="button" class="a2" id="a2" name="2"></button>
      <button type="button" class="a3" id="a3" name="3"></button>
    </div>
    <div class="b-row">
      <button type="button" class="b1" id="b1" name="4"></button>
      <button type="button" class="b2" id="b2" name="5"></button>
      <button type="button" class="b3" id="b3" name="6"></button>
    </div>
    <div class="c-row">
      <button type="button" class="c1" id="c1" name="7"></button>
      <button type="button" class="c2" id="c2" name="8"></button>
      <button type="button" class="c3" id="c3" name="9"></button>
    </div>
    `;
  }
}
