class Player {
  constructor(playerName, playerToken) {
    this.name = playerName
    this.token = playerToken
    this.wins = 0
    this.playerChoice
  }
  humanTakeTurn(event) {
    this.playerChoice = event.target.classList.value
  }
  computerMove(array) {
    var number = Math.floor(Math.random() * array.length)
    this.playerChoice = array[number]
    return this.playerChoice
  }
}
