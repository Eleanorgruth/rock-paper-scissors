class Game {
  constructor(gameType) {
    this.player1 = new Player('human', '👩🏻')
    this.player2 = new Player('computer', '💻')
    this.gameType = gameType
  }

  displayGame(gameSelector) {
      userInstructions.innerText = "Choose your fighter!"
      difficultGameSelector.classList.add('hidden')
      classicGameSelector.classList.add('hidden')
      images.classList.remove('hidden')
      changeGameButton.classList.remove('hidden')
      //images.innerHTML = ''
      if (gameSelector === 'classicGameSelector') {
        computerMove(choices)
        console.log(computerChoice)
        playClassicGame(event)
    } else if (gameSelector === 'difficultGameSelector') {
        console.log("difficult")
        images.innerHTML = `
        <img class="classic-bear-icon" src="./assets/bear.png" alt="clipart of a brown bear cup">
        <img class="classic-park-ranger-icon" src="./assets/park-ranger2.png" alt="clipart of a women park ranger holding a walkie talkie">
        <img class="classic-wildfire-icon"src="./assets/wildfire-icon.png" alt="clipart of a fire burning four trees">
        <img class="moose-icon" src="./assets/moose.png" alt="clipart of moose walking">
        <img class="rain-icon" src="./assets/rain.png" alt="clipart of a cloud with rain drops">`
      }
    }
}

// 2 player instances, 1 one on the compter

//Game Class should include the folllowing
  //Two Player instances
  //A way to keep track of the data for the game board
  //A way to keep track of the selected game type--this.gameType
  //A way to check the Game’s board data for win conditions
  //A way to detect when a game is a draw (no one has won)
  //A way to reset the Game’s board to begin a new game


  //I want a new instantiaon of "Game" when the user selects either classic or Difficult
