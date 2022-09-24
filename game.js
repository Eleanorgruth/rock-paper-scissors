class Game {
  constructor() {
    this.humanPlayer = new Player('human', '👩🏻')
    this.computerPlayer = new Player('computer', '💻')
    this.endOfRoundMessage
    this.classicChoices = ['classic-park-ranger', 'classic-wildfire', 'classic-bear']
    this.difficultChoices = ['classic-park-ranger', 'classic-wildfire', 'classic-bear', 'difficult-moose', 'difficult-rain']
    this.isClassicGame
  }

compareClassicResults() {
  var playerChoice = this.humanPlayer.playerChoice
  var computerChoice = this.computerPlayer.playerChoice
    if (playerChoice.includes("wildfire") && computerChoice === "classic-bear") {
      this.endOfRoundMessage = "You won! Wildfire beats Bear!"
      this.humanPlayer.wins += 1
    } else if (playerChoice.includes("wildfire") && computerChoice === "classic-park-ranger") {
      this.endOfRoundMessage = "You lost! Park ranger beats wildfire!"
      this.computerPlayer.wins +=1
    } else if (playerChoice.includes("wildfire") && computerChoice === "classic-wildfire") {
      this.endOfRoundMessage = "It's a draw!"
    } else if (playerChoice.includes("bear") && computerChoice === "classic-wildfire") {
      this.endOfRoundMessage = "You lost! Wildfire beats bear!"
      this.computerPlayer.wins +=1
    } else if (playerChoice.includes("bear") && computerChoice === "classic-park-ranger") {
      this.endOfRoundMessage = "You won! Bear beats park ranger!"
      this.humanPlayer.wins += 1
    } else if (playerChoice.includes("bear") && computerChoice === "classic-bear") {
      this.endOfRoundMessage = "It's a draw!"
    } else if (playerChoice.includes("park-ranger") && computerChoice === "classic-bear") {
      this.computerPlayer.wins +=1
      this.endOfRoundMessage = "You lost! Bear beats park ranger!"
    } else if (playerChoice.includes("park-ranger") && computerChoice === 'classic-wildfire') {
      this.endOfRoundMessage = "You won! Park ranger beats wildfire!"
      this.humanPlayer.wins += 1
    } else if (playerChoice.includes("park-ranger") && computerChoice === "classic-park-ranger") {
      this.endOfRoundMessage = "It's a draw!"
    }
  }

compareDifficultResults() {
  var playerChoice = this.humanPlayer.playerChoice
  var computerChoice = this.computerPlayer.playerChoice
  if (playerChoice ==="classic-wildfire" && computerChoice === "classic-bear") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice ==="classic-wildfire" && computerChoice === "difficult-moose") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    }else if (playerChoice ==="classic-wildfire" && computerChoice === "classic-park-ranger") {
      this.endOfRoundMessage = "You lost!"
      currentGame.computerPlayer.wins +=1
    } else if (playerChoice ==="classic-wildfire" && computerChoice === "difficult-rain") {
      this.endOfRoundMessage = "You lost!"
      currentGame.computerPlayer.wins +=1
    } else if (playerChoice ==="classic-wildfire" && computerChoice === "classic-wildfire") {
      this.endOfRoundMessage = "It's a draw!"
    } else if (playerChoice ==="classic-bear" && computerChoice === "classic-wildfire") {
      this.endOfRoundMessage = "You lost!"
      currentGame.computerPlayer.wins +=1
    } else if (playerChoice ==="classic-bear" && computerChoice === "difficult-moose") {
      this.endOfRoundMessage = "You lost!"
      currentGame.computerPlayer.wins +=1
    } else if (playerChoice ==="classic-bear" && computerChoice === "classic-park-ranger") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice ==="classic-bear" && computerChoice === "difficult-rain") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice ==="classic-bear" && computerChoice === "classic-bear") {
      this.endOfRoundMessage = "It's a draw!"
    } else if (playerChoice ==="classic-park-ranger" && computerChoice === "classic-bear") {
      currentGame.computerPlayer.wins +=1
      this.endOfRoundMessage = "You lost!"
    } else if (playerChoice ==="classic-park-ranger" && computerChoice === "difficult-rain") {
      currentGame.computerPlayer.wins +=1
      this.endOfRoundMessage = "You lost!"
    } else if (playerChoice ==="classic-park-ranger" && computerChoice === 'classic-wildfire') {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice ==="classic-park-ranger" && computerChoice === "difficult-moose") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice ==="classic-park-ranger" && computerChoice === "classic-park-ranger") {
      this.endOfRoundMessage = "It's a draw!"
    } else if (playerChoice === "difficult-moose" && computerChoice === "classic-bear") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice === "difficult-moose" && computerChoice === "difficult-rain") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice === "difficult-moose" && computerChoice === "classic-wildfire") {
      this.endOfRoundMessage = "You lost"
      currentGame.computerPlayer.wins += 1
    } else if (playerChoice === "difficult-moose" && computerChoice === "classic-park-ranger") {
      this.endOfRoundMessage = "You lost"
      currentGame.computerPlayer.wins += 1
    } else if (playerChoice === 'difficult-moose' && computerChoice === "difficult-moose") {
      this.endOfRoundMessage = "It's a draw!"
    } else if (playerChoice === "difficult-rain" && computerChoice === "classic-wildfire") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice === "difficult-rain" && computerChoice === "classic-park-ranger") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice === "difficult-rain" && computerChoice === "classic-bear") {
      this.endOfRoundMessage = "You lost"
      currentGame.computerPlayer.wins += 1
    } else if (playerChoice === "difficult-rain" && computerChoice === "difficult-moose") {
      this.endOfRoundMessaget = "You lost"
      currentGame.computerPlayer.wins += 1
    } else if (playerChoice === "difficult-rain" && computerChoice === "difficult-rain") {
      this.endOfRoundMessage = "It's a draw!"
    }
  }
}
