var choices = ['Park Ranger', 'Wild Fire', 'Bear']
var playerChoice
var computerChoice
var currentGame

var classicGameSelector = document.querySelector('#classicGameSelector')
var userInstructions = document.querySelector('.user-instructions')
var difficultGameSelector = document.querySelector('#difficultGameSelector')
var images = document.querySelector('.images')
var changeGameButton = document.querySelector('.change-game')
var winsCounterHuman = document.querySelector('#winsCounterHuman')
var winsCounterComputer = document.querySelector('#winsCounterComputer')

var gameTypeSelector = document.querySelector('.main-page')

//window.addEventListener('load', startGame)
gameTypeSelector.addEventListener('click', selectGameType)
//classicGameSelector.addEventListener('click', displayClassicGame)
// images.addEventListener('click', function () {
//   currentGame.playClassicGame()
// })

images.addEventListener('click', playClassicGame)

changeGameButton.addEventListener('click', displayMenu)

function selectGameType(event) {
  if (event.target.id === 'classicGameSelector') {
    currentGame = new Game(event.target.id)
    currentGame.displayGame(event.target.id)
  } else if (event.target.id === 'difficultGameSelector') {
    var currentGame = new Game(event.target.id)
    currentGame.displayGame(event.target.id)
  // } else {
  //   console.log("please select a game") /*this needs work but could be an error message added to the innerHTML*/
  }

  // if (event.target.ID.contains(classicGameSelector)) {
  //   console.log("classicGame")
  }
//   newGame = new Game() //pass in classic or difficult
//  console.log(newGame)
// }

function displayMenu() {
  userInstructions.innerText = "Choose your game!"
  difficultGameSelector.classList.remove('hidden')
  classicGameSelector.classList.remove('hidden')
  images.classList.add('hidden')
  changeGameButton.classList.add('hidden')
}

// function displayClassicGame() {


function computerMove(array) {
 var number = Math.floor(Math.random() * array.length)
  computerChoice = choices[number]
  return computerChoice
}

// pass in the event

function playClassicGame(event) {
  userInstructions.innerText = ""
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


function updateScore(userInstructions) {
  if(userInstructions.innerText === "You won!") {
    currentGame.player1.wins += 1
  } else if (userInstructions.innerText === "You lost! One point for the computer") {
    currentGame.player2.wins +=1
  }
  //  else if (userInstructions.innerText = "It's a draw!") {
  //   newGame.player2.wins
  //   newGame.player1.wins
  winsCounterHuman.innerText = currentGame.player1.wins
  winsCounterComputer.innerText = currentGame.player2.wins
}


//on the page load, we are starting a new instance of game which hold the player classes(which hold the scores)
//we want to update the socres if the innerText is "you won", or the compter won
//We also need the win counter to be a direct reflection of the data modole (player.wins)

// for now, just update the data model
