class Statistics {
  constructor() {
    this.gameResults = [];
  }
  addGameToStats(win, bid) {
    let gameResult = {
      win: win,
      bod: bid,
    }
    this.gameResults.push(gameResult);
  }
  showGameStats() {
    let games = this.gameResults.length; // ilość gier
    let wins = this.gameResults.filter(result => result.win).length; //ilosc wygranych
    let losses = this.gameResults.filter(result => !result.win).length; // ilość przegranych

    return [games, wins, losses];

  }
}