class Player {
  constructor(id, icon) {
    this.id = id;
    this.icon = icon;
    this.positions = [];
    this.wins = 0;
  }

  takeTurn() {
    //
  }

  saveToStorage() {
    var stringifiedWins = JSON.stringify(this.wins);
    localStorage.setItem('winCount', stringifiedWins);
    //account for two players with key
  }

  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem('winCount');
    var parsedWins = JSON.parse(retrievedWins);
    this.wins = parsedWins;
  }
};
