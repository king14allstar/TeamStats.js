const team = {
  _players: [
    {firstName: 'Roger', lastName: 'Bishop', age: 23},
    {firstName: "Will", lastName: 'Alvarez', age: 25},
    {firstName: 'Bronny', lastName: 'James', age: 20}
  ],
  _games: [
    {opponent: 'Lakers', teamPoints: 102, opponentPoints: 99},
    {opponent: 'Bears', teamPoints: 0, opponentPoints: 21},
    {opponent: 'Rays', teamPoints: 5, opponentPoints: 2}
  ],
  get players() {
    return this._players;
  },
get games(){
  return this._games;
},
addPlayer(newFirstName, newLastName, newAge){
  let player = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge
  };
  this.players.push(player);
},
addGame(newOpponent, newTeamPoints, newOpponentPoints) {
  let game = {
    opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentPoints: newOpponentPoints
  };
  this.games.push(game);
}
};
team.addPlayer('Lebron', 'James', 39);
console.log(team.players);

team.addGame('Bucs', 28, 10);
console.log(team.games);


