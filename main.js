var classicChoices = ['classic-park-ranger', 'classic-wildfire', 'classic-bear']
var difficultChoices = ['Park Ranger', 'Wildfire', 'Bear', 'Moose', 'Storm']
var playerChoice
var computerChoice
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
var difficultBear = document.querySelector('.difficult-bear')
var difficultParkRanger = document.querySelector('.difficult-park-ranger')
var difficultWildfire = document.querySelector('.difficult-wildfire')
var difficultMoose = document.querySelector('.difficult-moose')
var difficultRain = document.querySelector('.difficult-rain')

window.addEventListener('load', startGame)

classicGameSelector.addEventListener('click', displayClassicGame)

images.addEventListener('click', playerChoice)

changeGameButton.addEventListener('click', displayMenu)

difficultGameSelector.addEventListener('click', displayDifficultGame)

function startGame() {
  newGame = new Game
 console.log(newGame)
}

function hideImages() {
  difficultBear.classList.add('hidden')
  difficultWildfire.classList.add('hidden')
  difficultParkRanger.classList.add('hidden')
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

function hideMenu() {
  userInstructions.innerText = "Choose your fighter!"
  difficultGameSelector.classList.add('hidden')
  classicGameSelector.classList.add('hidden')
  changeGameButton.classList.remove('hidden')
}

function displayClassicGame() {
  hideMenu()
  classicBear.classList.remove('hidden')
  classicParkRanger.classList.remove('hidden')
  classicWildfire.classList.remove('hidden')
}

 function displayDifficultGame() {
   hideMenu()
   difficultBear.classList.remove('hidden')
   difficultWildfire.classList.remove('hidden')
   difficultParkRanger.classList.remove('hidden')
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
  console.log(`playerChoice: ${playerChoice}`)
  computerMove(classicChoices)
  compareResults(computerChoice, playerChoice)
  displayComputerChoice()
  displayHumanChoice()
}

function compareResults(playerChoice, computerChoice) {
  if(playerChoice ==="classic-wildfire" && computerChoice === "classic-bear") {
      console.log("You won!")
      userInstructions.innerText = "You won!"
    } else if (playerChoice ==="classic-wildfire" && computerChoice === "classic-park-ranger") {
      console.log("You lost! One point for the computer")
      userInstructions.innerText = "You lost! One point for the computer"
    } else if (playerChoice ==="classic-wildfire" && computerChoice === "classic-wildfire") {
      console.log("It's a draw!")
      userInstructions.innerText = "It's a draw!"
    } else if (playerChoice ==="classic-bear" && computerChoice === 'classic-wildfire') {
      console.log("You lost! One point for the computer")
      userInstructions.innerText = "You lost! One point for the computer"
    } else if(playerChoice ==="classic-bear" && computerChoice === "classic-park-ranger") {
      console.log("You won!")
      userInstructions.innerText = "You won!"
    } else if(playerChoice ==="classic-bear" && computerChoice === "classic-bear") {
      console.log("It's a draw!")
      userInstructions.innerText = "It's a draw!"
    } else if(playerChoice ==="classic-park-ranger" && computerChoice === "classic-bear") {
      console.log("You lost! One point for the computer")
      userInstructions.innerText = "You lost! One point for the computer"
    } else if(playerChoice ==="classic-park-ranger" && computerChoice === 'classic-wildfire') {
      console.log("You won!")
      userInstructions.innerText = "You won!"
    } else if(playerChoice ==="classic-park-ranger" && computerChoice === "classic-park-ranger") {
      console.log("It's a draw!")
      userInstructions.innerText = "It's a draw!"
    }
     updateScore(userInstructions)
  }

  // if(computerChoice > playerChoice) {
  //   console.log("you lost")
  //
  // } else if(playerChoice > computerChoice) {
  //   console.log("you won")
  //    userInstructions.innerText = `You won! ${playerChoice} beats ${computerChoice}!`
  // } else if (computerChoice === playerChoice) {
  //   console.log("it's a draw")
  // }


function displayComputerChoice() {
  hideImages()
  if (computerChoice === "classic-park-ranger") {
    classicParkRanger.classList.remove('hidden')
  } else if(computerChoice === "classic-wildfire") {
    classicWildfire.classList.remove('hidden')
  } else if (computerChoice === "classic-bear") {
    classicBear.classList.remove('hidden')
  }
  }

  function displayHumanChoice() {
    if (playerChoice === "classic-park-ranger") {
      classicParkRanger.classList.remove('hidden')
    } else if(playerChoice === "classic-wildfire") {
      classicWildfire.classList.remove('hidden')
    } else if (playerChoice === "classic-bear") {
      classicBear.classList.remove('hidden')
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


function updateScore(userInstructions) {
  if(userInstructions.innerText === "You won!") {
    newGame.player1.wins += 1
  } else if (userInstructions.innerText === "You lost! One point for the computer") {
    newGame.player2.wins +=1
  }
  winsCounterHuman.innerText = newGame.player1.wins
  winsCounterComputer.innerText = newGame.player2.wins
}


//on the page load, we are starting a new instance of game which hold the player classes(which hold the scores)
//we want to update the socres if the innerText is "you won", or the compter won
//We also need the win counter to be a direct reflection of the data modole (player.wins)

// for now, just update the data model
