var currentGame

var classicGameSelector = document.querySelector('#classicGameSelector')
var userInstructions = document.querySelector('.user-instructions')
var difficultGameSelector = document.querySelector('#difficultGameSelector')
var images = document.querySelector('.images')
var changeGameButton = document.querySelector('.change-game')
var winsCounterHuman = document.querySelector('#winsCounterHuman')
var winsCounterComputer = document.querySelector('#winsCounterComputer')

var classicBear = document.querySelector('.classic-bear')
var classicParkRanger = document.querySelector('.classic-park-ranger')
var classicWildfire = document.querySelector('.classic-wildfire')
var difficultMoose = document.querySelector('.difficult-moose')
var difficultRain = document.querySelector('.difficult-rain')

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
   console.log("TEST")
   displayGameMode()
   currentGame.isClassicGame = false
   classicBear.classList.remove('hidden')
   classicParkRanger.classList.remove('hidden')
   classicWildfire.classList.remove('hidden')
   difficultMoose.classList.remove('hidden')
   difficultRain.classList.remove('hidden')
 }


// function playerChoice(event) {
//   playerChoice = event.target.classList.value
//   computerMove(classicChoices)
//   compareResults(playerChoice, computerChoice)
//   displayComputerChoice()
//   displayHumanChoice()
//   setTimeout(displayClassicGame, 2000)
// }

// this HAS to be in the main to call all class methods
 //triggers methods in the game class and player class, still lives in main--
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
    console.log(`computerPlayer.playerChoice ${currentGame.computerPlayer.playerChoice}`)
    currentGame.compareClassicResults()
  } else {
    currentGame.computerPlayer.computerMove(currentGame.difficultChoices)
    currentGame.compareDifficultResults()
  }
}

function updateRoundResults(endOfRoundMessage) {
  userInstructions.innerText = currentGame.endOfRoundMessage
  winsCounterHuman.innerText = currentGame.humanPlayer.wins
  winsCounterComputer.innerText = currentGame.computerPlayer.wins
}


//use for loops to display the results
function displayComputerChoice() {
  hideImages()
  if (currentGame.computerPlayer.playerChoice === "classic-park-ranger") {
    classicParkRanger.classList.remove('hidden')
  } else if(currentGame.computerPlayer.playerChoice === "classic-wildfire") {
    classicWildfire.classList.remove('hidden')
  } else if (currentGame.computerPlayer.playerChoice === "classic-bear") {
    classicBear.classList.remove('hidden')
  } else if (currentGame.computerPlayer.playerChoice === "difficult-moose") {
    difficultMoose.classList.remove('hidden')
  } else if (currentGame.computerPlayer.playerChoice === 'difficult-rain') {
    difficultRain.classList.remove('hidden')
  }
  }

  function displayHumanChoice() {
    if (currentGame.humanPlayer.playerChoice === "classic-park-ranger") {
      classicParkRanger.classList.remove('hidden')
    } else if(currentGame.humanPlayer.playerChoice === "classic-wildfire") {
      classicWildfire.classList.remove('hidden')
    } else if (currentGame.humanPlayer.playerChoice === "classic-bear") {
      classicBear.classList.remove('hidden')
    } else if (currentGame.humanPlayer.playerChoice === "difficult-moose") {
      difficultMoose.classList.remove('hidden')
    } else if (currentGame.humanPlayer.playerChoice === 'difficult-rain') {
      difficultRain.classList.remove('hidden')
  }
}


// function compareResults(playerChoice, computerChoice) {
//   if(playerChoice ==="classic-wildfire" && computerChoice === "classic-bear") {
//       userInstructions.innerText = "You won!"
//       currentGame.humanPlayer.wins += 1
//     } else if (playerChoice ==="classic-wildfire" && computerChoice === "difficult-moose") {
//       userInstructions.innerText = "You won!"
//       currentGame.humanPlayer.wins += 1
//     }else if (playerChoice ==="classic-wildfire" && computerChoice === "classic-park-ranger") {
//       userInstructions.innerText = "You lost!"
//       currentGame.computerPlayer.wins +=1
//     } else if (playerChoice ==="classic-wildfire" && computerChoice === "difficult-rain") {
//       userInstructions.innerText = "You lost!"
//       currentGame.computerPlayer.wins +=1
//     } else if (playerChoice ==="classic-wildfire" && computerChoice === "classic-wildfire") {
//       userInstructions.innerText = "It's a draw!"
//     } else if (playerChoice ==="classic-bear" && computerChoice === "classic-wildfire") {
//       userInstructions.innerText = "You lost!"
//       currentGame.computerPlayer.wins +=1
//     } else if (playerChoice ==="classic-bear" && computerChoice === "difficult-moose") {
//       userInstructions.innerText = "You lost!"
//       currentGame.computerPlayer.wins +=1
//     } else if(playerChoice ==="classic-bear" && computerChoice === "classic-park-ranger") {
//       userInstructions.innerText = "You won!"
//       currentGame.humanPlayer.wins += 1
//     } else if (playerChoice ==="classic-bear" && computerChoice === "difficult-rain") {
//       userInstructions.innerText = "You won!"
//       currentGame.humanPlayer.wins += 1
//     } else if(playerChoice ==="classic-bear" && computerChoice === "classic-bear") {
//       userInstructions.innerText = "It's a draw!"
//     } else if(playerChoice ==="classic-park-ranger" && computerChoice === "classic-bear") {
//       currentGame.computerPlayer.wins +=1
//       userInstructions.innerText = "You lost!"
//     } else if(playerChoice ==="classic-park-ranger" && computerChoice === "difficult-rain") {
//       currentGame.computerPlayer.wins +=1
//       userInstructions.innerText = "You lost!"
//     } else if(playerChoice ==="classic-park-ranger" && computerChoice === 'classic-wildfire') {
//       userInstructions.innerText = "You won!"
//       currentGame.humanPlayer.wins += 1
//     } else if (playerChoice ==="classic-park-ranger" && computerChoice === "difficult-moose") {
//       userInstructions.innerText = "You won!"
//       currentGame.humanPlayer.wins += 1
//     } else if(playerChoice ==="classic-park-ranger" && computerChoice === "classic-park-ranger") {
//       userInstructions.innerText = "It's a draw!"
//     } else if(playerChoice === "difficult-moose" && computerChoice === "classic-bear") {
//       userInstructions.innerText = "You won!"
//       currentGame.humanPlayer.wins += 1
//     } else if (playerChoice === "difficult-moose" && computerChoice === "difficult-rain") {
//       userInstructions.innerText = "You won!"
//       currentGame.humanPlayer.wins += 1
//     } else if(playerChoice === "difficult-moose" && computerChoice === "classic-wildfire") {
//       userInstructions.innerText = "You lost"
//       currentGame.computerPlayer.wins += 1
//     } else if(playerChoice === "difficult-moose" && computerChoice === "classic-park-ranger") {
//       userInstructions.innerText = "You lost"
//       currentGame.computerPlayer.wins += 1
//     } else if(playerChoice === 'difficult-moose' && computerChoice === "difficult-moose") {
//       userInstructions.innerText = "It's a draw!"
//     } else if(playerChoice === "difficult-rain" && computerChoice === "classic-wildfire") {
//       userInstructions.innerText = "You won!"
//       currentGame.humanPlayer.wins += 1
//     } else if (playerChoice === "difficult-rain" && computerChoice === "classic-park-ranger") {
//       userInstructions.innerText = "You won!"
//       currentGame.humanPlayer.wins += 1
//     } else if (playerChoice === "difficult-rain" && computerChoice === "classic-bear") {
//       userInstructions.innerText = "You lost"
//       currentGame.computerPlayer.wins += 1
//     }else if(playerChoice === "difficult-rain" && computerChoice === "difficult-moose") {
//       userInstructions.innerText = "You lost"
//       currentGame.computerPlayer.wins += 1
//     } else if(playerChoice === "difficult-rain" && computerChoice === "difficult-rain") {
//       userInstructions.innerText = "It's a draw!"
//     }
//      updateScore(userInstructions)
//}
// function playClassicGame(event) {
//    playerChoice(event)
//    computerMove(classicChoices)
//    compareResults(computerChoice, playerChoice)
// }


// pass in the event
// function playClassicGame(event) {
//   if(event.target.classList.contains("classic-wildfire-icon") && computerChoice === "Bear") {
//     console.log("You won!")
//     userInstructions.innerText = "You won!"
//   } else if (event.target.classList.contains("classic-wildfire-icon") && computerChoice === "Park Ranger") {
//     console.log("You lost! One point for the computer")
//     userInstructions.innerText = "You lost! One point for the computer"
//   } else if (event.target.classList.contains("classic-wildfire-icon") && computerChoice === "Wild Fire") {
//     console.log("It's a draw!")
//     userInstructions.innerText = "It's a draw!"
//   } else if (event.target.classList.contains("classic-bear-icon") && computerChoice === 'Wild Fire') {
//     console.log("You lost! One point for the computer")
//     userInstructions.innerText = "You lost! One point for the computer"
//   } else if(event.target.classList.contains("classic-bear-icon") && computerChoice === "Park Ranger") {
//     console.log("You won!")
//     userInstructions.innerText = "You won!"
//   } else if(event.target.classList.contains("classic-bear-icon") && computerChoice === "Bear") {
//     console.log("It's a draw!")
//     userInstructions.innerText = "It's a draw!"
//   } else if(event.target.classList.contains("classic-park-ranger-icon") && computerChoice === "Bear") {
//     console.log("You lost! One point for the computer")
//     userInstructions.innerText = "You lost! One point for the computer"
//   } else if(event.target.classList.contains("classic-park-ranger-icon") && computerChoice === 'Wild Fire') {
//     console.log("You won!")
//     userInstructions.innerText = "You won!"
//   } else if(event.target.classList.contains("classic-park-ranger-icon") && computerChoice === "Park Ranger") {
//     console.log("It's a draw!")
//     userInstructions.innerText = "It's a draw!"
//   }
//   updateScore(userInstructions)
//   displayComputerChoice()
// }





//on the page load, we are starting a new instance of game which hold the player classes(which hold the scores)
//we want to update the socres if the innerText is "you won", or the compter won
//We also need the win counter to be a direct reflection of the data modole (player.wins)

// for now, just update the data model
