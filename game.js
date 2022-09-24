class Game {
  constructor() {
    this.humanPlayer = new Player('human', '👩🏻')
    this.computerPlayer = new Player('computer', '💻')
    this.endOfRoundMessage
    this.classicChoices = ['park ranger', 'wildfire', 'bear']
    this.difficultChoices = ['park ranger', 'wildfire', 'bear', 'moose', 'storm']
    this.isClassicGame
  }

compareClassicResults() {
  var playerChoice = this.humanPlayer.playerChoice
  var computerChoice = this.computerPlayer.playerChoice
    if (playerChoice.includes("wildfire") && computerChoice === "bear") {
      this.endOfRoundMessage = "You won!"
      this.humanPlayer.wins += 1
    } else if (playerChoice.includes("wildfire") && computerChoice === "park ranger") {
      this.endOfRoundMessage = "You lost!"
      this.computerPlayer.wins +=1
    } else if (playerChoice.includes("wildfire") && computerChoice === "wildfire") {
      this.endOfRoundMessage = "It's a draw!"
    } else if (playerChoice.includes("bear") && computerChoice === "wildfire") {
      this.endOfRoundMessage = "You lost!"
      this.computerPlayer.wins +=1
    } else if (playerChoice.includes("bear") && computerChoice === "park ranger") {
      this.endOfRoundMessage = "You won!"
      this.humanPlayer.wins += 1
    } else if (playerChoice.includes("bear") && computerChoice === "bear") {
      this.endOfRoundMessage = "It's a draw!"
    } else if (playerChoice.includes("ranger") && computerChoice === "bear") {
      this.computerPlayer.wins +=1
      this.endOfRoundMessage = "You lost!"
    } else if (playerChoice.includes("ranger") && computerChoice === 'wildfire') {
      this.endOfRoundMessage = "You won!"
      this.humanPlayer.wins += 1
    } else if (playerChoice.includes("ranger") && computerChoice === "park ranger") {
      this.endOfRoundMessage = "It's a draw!"
    }
  }

compareDifficultResults() {
  var playerChoice = this.humanPlayer.playerChoice
  var computerChoice = this.computerPlayer.playerChoice
  if (playerChoice.includes("wildfire") && computerChoice === "bear") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice.includes("wildfire") && computerChoice === "moose") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    }else if (playerChoice.includes("wildfire") && computerChoice === "park ranger") {
      this.endOfRoundMessage = "You lost!"
      currentGame.computerPlayer.wins +=1
    } else if (playerChoice.includes("wildfire") && computerChoice === "storm") {
      this.endOfRoundMessage = "You lost!"
      currentGame.computerPlayer.wins +=1
    } else if (playerChoice.includes("wildfire") && computerChoice === "wildfire") {
      this.endOfRoundMessage = "It's a draw!"
    } else if (playerChoice.includes("bear") && computerChoice === "wildfire") {
      this.endOfRoundMessage = "You lost!"
      currentGame.computerPlayer.wins +=1
    } else if (playerChoice.includes("bear") && computerChoice === "moose") {
      this.endOfRoundMessage = "You lost!"
      currentGame.computerPlayer.wins +=1
    } else if (playerChoice.includes("bear") && computerChoice === "park ranger") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice.includes("bear") && computerChoice === "storm") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice.includes("bear") && computerChoice === "bear") {
      this.endOfRoundMessage = "It's a draw!"
    } else if (playerChoice.includes("ranger") && computerChoice === "bear") {
      currentGame.computerPlayer.wins +=1
      this.endOfRoundMessage = "You lost!"
    } else if (playerChoice.includes("ranger") && computerChoice === "storm") {
      currentGame.computerPlayer.wins +=1
      this.endOfRoundMessage = "You lost!"
    } else if (playerChoice.includes("ranger") && computerChoice === 'wildfire') {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice.includes("ranger") && computerChoice === "moose") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice.includes("ranger") && computerChoice === "park ranger") {
      this.endOfRoundMessage = "It's a draw!"
    } else if (playerChoice.includes("moose") && computerChoice === "bear") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice.includes("moose") && computerChoice === "storm") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice.includes("moose") && computerChoice === "wildfire") {
      this.endOfRoundMessage = "You lost"
      currentGame.computerPlayer.wins += 1
    } else if (playerChoice === "difficult-moose" && computerChoice === "park-ranger") {
      this.endOfRoundMessage = "You lost"
      currentGame.computerPlayer.wins += 1
    } else if (playerChoice.includes("moose") && computerChoice === "moose") {
      this.endOfRoundMessage = "It's a draw!"
    } else if (playerChoice.includes("storm") && computerChoice === "wildfire") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice.includes("storm") && computerChoice === "park ranger") {
      this.endOfRoundMessage = "You won!"
      currentGame.humanPlayer.wins += 1
    } else if (playerChoice.includes("storm") && computerChoice === "bear") {
      this.endOfRoundMessage = "You lost"
      currentGame.computerPlayer.wins += 1
    } else if (playerChoice.includes("storm") && computerChoice === "moose") {
      this.endOfRoundMessage = "You lost"
      currentGame.computerPlayer.wins += 1
    } else if (playerChoice.includes("storm") && computerChoice === "storm") {
      this.endOfRoundMessage = "It's a draw!"
    }
  }
}
