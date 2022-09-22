var classicChoices = ['Park Ranger', 'Wild Fire', 'Bear']
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

var classicBear = document.querySelector('.classic-bear-icon')
var classicParkRanger = document.querySelector('.classic-park-ranger-icon')
var classicWildfire = document.querySelector('.classic-wildfire-icon')
var difficultBear = document.querySelector('.difficult-bear-icon')
var difficultParkRanger = document.querySelector('.difficult-park-ranger-icon')
var difficultWildfire = document.querySelector('.difficult-wildfire-icon')
var difficultMoose = document.querySelector('.difficult-moose-icon')
var difficultRain = document.querySelector('.difficult-rain-icon')

window.addEventListener('load', startGame)

classicGameSelector.addEventListener('click', displayClassicGame)
images.addEventListener('click', playClassicGame)
changeGameButton.addEventListener('click', displayMenu)
difficultGameSelector.addEventListener('click', displayDifficultGame)

function startGame() {
  newGame = new Game
 console.log(newGame)
}

function displayMenu() {
  userInstructions.innerText = "Choose your game!"
  difficultGameSelector.classList.remove('hidden')
  classicGameSelector.classList.remove('hidden')
  changeGameButton.classList.add('hidden')
  difficultBear.classList.add('hidden')
  difficultWildfire.classList.add('hidden')
  difficultParkRanger.classList.add('hidden')
  difficultMoose.classList.add('hidden')
  difficultRain.classList.add('hidden')
  classicBear.classList.add('hidden')
  classicParkRanger.classList.add('hidden')
  classicWildfire.classList.add('hidden')
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
  computerMove(classicChoices)
  console.log(computerChoice)
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
  return computerChoice
}

// pass in the event
function playClassicGame(event) {
//  userInstructions.innerText = ""
  if(event.target.classList.contains("classic-wildfire-icon") && computerChoice === "Bear") {
    console.log("You won!")
    userInstructions.innerText = "You won!"
  } else if (event.target.classList.contains("classic-wildfire-icon") && computerChoice === "Park Ranger") {
    console.log("You lost! One point for the computer")
    userInstructions.innerText = "You lost! One point for the computer"
  } else if (event.target.classList.contains("classic-wildfire-icon") && computerChoice === "Wild Fire") {
    console.log("It's a draw!")
    userInstructions.innerText = "It's a draw!"
  } else if (event.target.classList.contains("classic-bear-icon") && computerChoice === 'Wild Fire') {
    console.log("You lost! One point for the computer")
    userInstructions.innerText = "You lost! One point for the computer"
  } else if(event.target.classList.contains("classic-bear-icon") && computerChoice === "Park Ranger") {
    console.log("You won!")
    userInstructions.innerText = "You won!"
  } else if(event.target.classList.contains("classic-bear-icon") && computerChoice === "Bear") {
    console.log("It's a draw!")
    userInstructions.innerText = "It's a draw!"
  } else if(event.target.classList.contains("classic-park-ranger-icon") && computerChoice === "Bear") {
    console.log("You lost! One point for the computer")
    userInstructions.innerText = "You lost! One point for the computer"
  } else if(event.target.classList.contains("classic-park-ranger-icon") && computerChoice === 'Wild Fire') {
    console.log("You won!")
    userInstructions.innerText = "You won!"
  } else if(event.target.classList.contains("classic-park-ranger-icon") && computerChoice === "Park Ranger") {
    console.log("It's a draw!")
    userInstructions.innerText = "It's a draw!"
  }
  updateScore(userInstructions)
}

function displayGameResults(){

}

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
