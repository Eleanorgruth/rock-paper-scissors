var currentGame

var classicGameSelector = document.querySelector('#classicGameSelector')
var userInstructions = document.querySelector('.user-instructions')
var difficultGameSelector = document.querySelector('#difficultGameSelector')
var images = document.querySelector('.images')
var changeGameButton = document.querySelector('.change-game')
var winsCounterHuman = document.querySelector('#winsCounterHuman')
var winsCounterComputer = document.querySelector('#winsCounterComputer')

var classicBear = document.querySelector('.bear')
var classicParkRanger = document.querySelector('.park-ranger')
var classicWildfire = document.querySelector('.wildfire')
var difficultMoose = document.querySelector('.moose')
var difficultRain = document.querySelector('.storm')

window.addEventListener('load', startGame)

classicGameSelector.addEventListener('click', displayClassicGame)

difficultGameSelector.addEventListener('click', displayDifficultGame)

images.addEventListener('click', runGame)

changeGameButton.addEventListener('click', displayMenu)


function startGame() {
  currentGame = new Game
 console.log(currentGame)
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
  hideImages()
}

function displayGameMode() {
  userInstructions.innerText = "Choose your fighter!"
  difficultGameSelector.classList.add('hidden')
  classicGameSelector.classList.add('hidden')
  changeGameButton.classList.remove('hidden')
}

function displayClassicGame() {
  currentGame.isClassicGame = true
  displayGameMode()
  classicBear.classList.remove('hidden')
  classicParkRanger.classList.remove('hidden')
  classicWildfire.classList.remove('hidden')
}

 function displayDifficultGame() {
   displayGameMode()
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
  resetGame()
  displayComputerChoice()
  displayHumanChoice()
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

function updateRoundResults(endOfRoundMessage) {
  userInstructions.innerText = `${currentGame.endOfRoundMessage} \r\n Human choice: ${currentGame.humanPlayer.playerChoice} || Computer choice: ${currentGame.computerPlayer.playerChoice}`
  winsCounterHuman.innerText = currentGame.humanPlayer.wins
  winsCounterComputer.innerText = currentGame.computerPlayer.wins
}

//use for loops to display the results
function displayComputerChoice() {
  hideImages()
  // for (var i = 0; i < ; i++) {
  //   if ()
  // }

  if (currentGame.computerPlayer.playerChoice === "park ranger") {
    classicParkRanger.classList.remove('hidden')
  } else if(currentGame.computerPlayer.playerChoice === "wildfire") {
    classicWildfire.classList.remove('hidden')
  } else if (currentGame.computerPlayer.playerChoice === "bear") {
    classicBear.classList.remove('hidden')
  } else if (currentGame.computerPlayer.playerChoice === "moose") {
    difficultMoose.classList.remove('hidden')
  } else if (currentGame.computerPlayer.playerChoice === 'storm') {
    difficultRain.classList.remove('hidden')
  }
}

  function displayHumanChoice() {
    if (currentGame.humanPlayer.playerChoice === "park-ranger") {
      classicParkRanger.classList.remove('hidden')
    } else if(currentGame.humanPlayer.playerChoice === "wildfire") {
      classicWildfire.classList.remove('hidden')
    } else if (currentGame.humanPlayer.playerChoice === "bear") {
      classicBear.classList.remove('hidden')
    } else if (currentGame.humanPlayer.playerChoice === "moose") {
      difficultMoose.classList.remove('hidden')
    } else if (currentGame.humanPlayer.playerChoice === 'storm') {
      difficultRain.classList.remove('hidden')
  }
}
