class Player {
  constructor(playerName, playerToken) {
    this.name = playerName
    this.token = playerToken
    this.wins = 0
    this.playerChoice
  }
  humanTakeTurn(event) {
    this.playerChoice = event.target.classList.value
    console.log(`humanplayer.playerChoice: ${this.playerChoice}`)
  }
  computerMove(array) {
    var number = Math.floor(Math.random() * array.length)
    this.playerChoice = array[number]
    return this.playerChoice
  }
}
