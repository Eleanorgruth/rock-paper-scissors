var choices = ['Park Ranger', 'Wild Fire', 'Bear']
var playerChoice
var computerChoice

var classicGameSelector = document.querySelector('#classicGameSelector')
var userInstructions = document.querySelector('.user-instructions')
var difficultGameSelector = document.querySelector('#difficultGameSelector')
var images = document.querySelector('.images')
var changeGameButton = document.querySelector('.change-game')

window.addEventListener('load', startGame)
classicGameSelector.addEventListener('click', displayClassicGame)
images.addEventListener('click', playGame)
changeGameButton.addEventListener('click', displayMenu)

function startGame() {
 var newGame = new Game
 console.log(newGame)
 newGame.player1.wins = 1
}

function displayMenu() {
  userInstructions.innerText = "Choose your game!"
  difficultGameSelector.classList.remove('hidden')
  classicGameSelector.classList.remove('hidden')
  images.classList.add('hidden')
  changeGameButton.classList.add('hidden')
}

function displayClassicGame() {
  userInstructions.innerText = "Choose your fighter!"
  difficultGameSelector.classList.add('hidden')
  classicGameSelector.classList.add('hidden')
  images.classList.remove('hidden')
  changeGameButton.classList.remove('hidden')
  computerMove(choices)
  console.log(computerChoice)
}

function computerMove(array) {
 var number = Math.floor(Math.random() * array.length)
  computerChoice = choices[number]
  return computerChoice
}

// pass in the event
function playGame(event) {
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
}

// function updateScore(userInstructions.innerText) {
//
// }
