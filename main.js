var currentGame
var classicGameSelector = document.querySelector('#classicGameSelector')
var userInstructions = document.querySelector('.user-instructions')
var difficultGameSelector = document.querySelector('#difficultGameSelector')
var images = document.querySelector('.images')
var playerChoiceResults = document.querySelector('.player-choice-results')
var changeGameButton = document.querySelector('.change-game')
var resetScoreButton = document.querySelector('.reset-game')
var winsCounterHuman = document.querySelector('#winsCounterHuman')
var winsCounterComputer = document.querySelector('#winsCounterComputer')
var classicBear = document.querySelector('.bear')
var classicParkRanger = document.querySelector('.ranger')
var classicWildfire = document.querySelector('.wildfire')
var difficultMoose = document.querySelector('.moose')
var difficultRain = document.querySelector('.storm')

window.addEventListener('load', startGame)
resetScoreButton.addEventListener('click', resetScore)
classicGameSelector.addEventListener('click', displayClassicGame)
difficultGameSelector.addEventListener('click', displayDifficultGame)
images.addEventListener('click', runGame)
changeGameButton.addEventListener('click', displayMenu)

function startGame() {
  currentGame = new Game
}

function resetScore() {
  startGame()
  updateScore()
  displayMenu()
}

function hideImages() {
  difficultMoose.classList.add('hidden')
  difficultRain.classList.add('hidden')
  classicBear.classList.add('hidden')
  classicParkRanger.classList.add('hidden')
  classicWildfire.classList.add('hidden')
}

function displayMenu() {
  userInstructions.innerText = "Choose your game!"
  difficultGameSelector.classList.remove('hidden')
  classicGameSelector.classList.remove('hidden')
  changeGameButton.classList.add('hidden')
  resetScoreButton.classList.add('hidden')
  hideImages()
}

function displayGameMode() {
  userInstructions.innerText = "Choose your fighter!"
  difficultGameSelector.classList.add('hidden')
  classicGameSelector.classList.add('hidden')
  changeGameButton.classList.remove('hidden')
  resetScoreButton.classList.remove('hidden')
}

function displayClassicGame() {
  currentGame.isClassicGame = true
  displayGameMode()
  playerChoiceResults.classList.add("hidden")
  classicBear.classList.remove('hidden')
  classicParkRanger.classList.remove('hidden')
  classicWildfire.classList.remove('hidden')
}

 function displayDifficultGame() {
   displayGameMode()
   playerChoiceResults.classList.add("hidden")
   currentGame.isClassicGame = false
   classicBear.classList.remove('hidden')
   classicParkRanger.classList.remove('hidden')
   classicWildfire.classList.remove('hidden')
   difficultMoose.classList.remove('hidden')
   difficultRain.classList.remove('hidden')
 }

function runGame(event) {
  currentGame.humanPlayer.humanTakeTurn(event)
  compareResults()
  updateRoundResults()
  displayChoices()
  resetGame()
}

function resetGame() {
  if (currentGame.isClassicGame) {
    setTimeout(displayClassicGame, 3000)
  } else if (!currentGame.isClassicGame) {
    setTimeout(displayDifficultGame, 3000)
  }
}

function compareResults() {
  if (currentGame.isClassicGame) {
    currentGame.computerPlayer.computerMove(currentGame.classicChoices)
    currentGame.compareClassicResults()
  } else {
    currentGame.computerPlayer.computerMove(currentGame.difficultChoices)
    currentGame.compareDifficultResults()
  }
}

function updateScore() {
  winsCounterHuman.innerText = currentGame.humanPlayer.wins
  winsCounterComputer.innerText = currentGame.computerPlayer.wins
}

function updateRoundResults(endOfRoundMessage) {
  userInstructions.innerText = `${currentGame.endOfRoundMessage} \r\n Human choice: ${currentGame.humanPlayer.playerChoice} || Computer choice: ${currentGame.computerPlayer.playerChoice}`
  updateScore()
  changeGameButton.classList.add('hidden')
  resetScoreButton.classList.add('hidden')
}

function displayChoices() {
  playerChoiceResults.innerHTML = ''
  hideImages()
  playerChoiceResults.classList.remove("hidden")
  playerChoiceResults.innerHTML += `
  <img class="${currentGame.humanPlayer.playerChoice}" src="./assets/${currentGame.humanPlayer.playerChoice}.png" alt="${currentGame.humanPlayer.playerChoice}">
  <img class="${currentGame.computerPlayer.playerChoice}" src="./assets/${currentGame.computerPlayer.playerChoice}.png" alt="${currentGame.computerPlayer.playerChoice}">`
}
