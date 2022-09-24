var classicChoices = ['classic-park-ranger', 'classic-wildfire', 'classic-bear']
var difficultChoices = ['classic-park-ranger', 'classic-wildfire', 'classic-bear', 'difficult-moose', 'difficult-rain']
var newGame

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

images.addEventListener('click', playerChoice)

changeGameButton.addEventListener('click', displayMenu)


function startGame() {
  newGame = new Game
 console.log(newGame)
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
  displayGameMode()
  classicBear.classList.remove('hidden')
  classicParkRanger.classList.remove('hidden')
  classicWildfire.classList.remove('hidden')
}

 function displayDifficultGame() {
   displayClassicGame()
   difficultMoose.classList.remove('hidden')
   difficultRain.classList.remove('hidden')
 }

function computerMove(array) {
 var number = Math.floor(Math.random() * array.length)
  computerChoice = classicChoices[number]
  console.log(`computerChoice ${computerChoice}`)
  return computerChoice
}

function playerChoice(event) {
  playerChoice = event.target.classList.value
  computerMove(classicChoices)
  compareResults(playerChoice, computerChoice)
  displayComputerChoice()
  displayHumanChoice()
  setTimeout(displayClassicGame, 2000)
}

// function compareResults(playerChoice, computerChoice) {
//   if(playerChoice ==="classic-wildfire" && computerChoice === "classic-bear" || computerChoice === "difficult-moose") {
//       userInstructions.innerText = "You won!"
//       newGame.player1.wins += 1
//     } else if (playerChoice ==="classic-wildfire" && computerChoice === "classic-park-ranger" || computerChoice === "difficult-rain") {
//       userInstructions.innerText = "You lost!"
//       newGame.player2.wins +=1
//     } else if (playerChoice ==="classic-wildfire" && computerChoice === "classic-wildfire") {
//       userInstructions.innerText = "It's a draw!"
//     } else if (playerChoice ==="classic-bear" && computerChoice === "classic-wildfire"  || computerChoice === "difficult-moose") {
//       userInstructions.innerText = "You lost!"
//       newGame.player2.wins +=1
//     } else if(playerChoice ==="classic-bear" && computerChoice === "classic-park-ranger" || computerChoice === "difficult-rain") {
//       userInstructions.innerText = "You won!"
//       newGame.player1.wins += 1
//     } else if(playerChoice ==="classic-bear" && computerChoice === "classic-bear") {
//       userInstructions.innerText = "It's a draw!"
//     } else if(playerChoice ==="classic-park-ranger" && computerChoice === "classic-bear" || computerChoice === "difficult-rain") {
//       newGame.player2.wins +=1
//       userInstructions.innerText = "You lost!"
//     } else if(playerChoice ==="classic-park-ranger" && computerChoice === 'classic-wildfire' || computerChoice === "difficult-moose") {
//       userInstructions.innerText = "You won!"
//       newGame.player1.wins += 1
//     } else if(playerChoice ==="classic-park-ranger" && computerChoice === "classic-park-ranger") {
//       userInstructions.innerText = "It's a draw!"
//     } else if(playerChoice === "difficult-moose" && computerChoice === "classic-bear" || computerChoice === "difficult-rain") {
//       userInstructions.innerText = "You won!"
//       newGame.player1.wins += 1
//     } else if(playerChoice === "difficult-moose" && computerChoice === "classic-wildfire" || computerChoice === "classic-park-ranger") {
//       userInstructions.innerText = "You lost"
//       newGame.player2.wins += 1
//     } else if(playerChoice === 'difficult-moose' && computerChoice === "difficult-moose") {
//       userInstructions.innerText = "It's a draw!"
//     } else if(playerChoice === "difficult-rain" && computerChoice === "classic-wildfire" || computerChoice === "classic-park-ranger") {
//       userInstructions.innerText = "You won!"
//       newGame.player1.wins += 1
//     } else if(playerChoice === "difficult-rain" && computerChoice === "difficult-moose" || computerChoice === "classic-bear" ) {
//       userInstructions.innerText = "You lost"
//       newGame.player2.wins += 1
//     } else if(playerChoice === "difficult-rain" && computerChoice === "difficult-rain") {
//       userInstructions.innerText = "It's a draw!"
//     }
// }

function compareResults(playerChoice, computerChoice) {
  if(playerChoice ==="classic-wildfire" && computerChoice === "classic-bear") {
      userInstructions.innerText = "You won! Wildfire beats Bear!"
      newGame.player1.wins += 1
    } else if (playerChoice ==="classic-wildfire" && computerChoice === "classic-park-ranger") {
      userInstructions.innerText = "You lost! Park ranger beats wildfire!"
      newGame.player2.wins +=1
    } else if (playerChoice ==="classic-wildfire" && computerChoice === "classic-wildfire") {
      userInstructions.innerText = "It's a draw!"
    } else if (playerChoice ==="classic-bear" && computerChoice === "classic-wildfire") {
      userInstructions.innerText = "You lost! Wildfire beats bear!"
      newGame.player2.wins +=1
    } else if(playerChoice ==="classic-bear" && computerChoice === "classic-park-ranger") {
      userInstructions.innerText = "You won! Bear beats park ranger!"
      newGame.player1.wins += 1
    } else if(playerChoice ==="classic-bear" && computerChoice === "classic-bear") {
      userInstructions.innerText = "It's a draw!"
    } else if(playerChoice ==="classic-park-ranger" && computerChoice === "classic-bear") {
      newGame.player2.wins +=1
      userInstructions.innerText = "You lost! Bear beats park ranger!"
    } else if(playerChoice ==="classic-park-ranger" && computerChoice === 'classic-wildfire') {
      userInstructions.innerText = "You won! Park ranger beats wildfire!"
      newGame.player1.wins += 1
    } else if(playerChoice ==="classic-park-ranger" && computerChoice === "classic-park-ranger") {
      userInstructions.innerText = "It's a draw!"
    }
     updateScore(userInstructions)
  }

  function updateScore(userInstructions) {
    winsCounterHuman.innerText = newGame.player1.wins
    winsCounterComputer.innerText = newGame.player2.wins
  }

function displayComputerChoice() {
  hideImages()
  if (computerChoice === "classic-park-ranger") {
    classicParkRanger.classList.remove('hidden')
  } else if(computerChoice === "classic-wildfire") {
    classicWildfire.classList.remove('hidden')
  } else if (computerChoice === "classic-bear") {
    classicBear.classList.remove('hidden')
  } else if (computerChoice === "difficult-moose") {
    difficultMoose.classList.remove('hidden')
  } else if (computerChoice === 'difficult-rain') {
    difficultRain.classList.remove('hidden')
  }
  }

  function displayHumanChoice() {
    if (playerChoice === "classic-park-ranger") {
      classicParkRanger.classList.remove('hidden')
    } else if(playerChoice === "classic-wildfire") {
      classicWildfire.classList.remove('hidden')
    } else if (playerChoice === "classic-bear") {
      classicBear.classList.remove('hidden')
    } else if (playerChoice === "difficult-moose") {
      difficultMoose.classList.remove('hidden')
    } else if (playerChoice === 'difficult-rain') {
      difficultRain.classList.remove('hidden')
  }
}

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
