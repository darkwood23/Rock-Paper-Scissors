let playerPoints = 0
let computerPoints = 0
const container = document.querySelector("#displayCode")

function getComputerChoice(min, max) {
    let computerChoice =  Math.floor(Math.random() * (max - min + 1) + min);
    if (computerChoice === 1) {
        return "rock"
    } else if (computerChoice === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playGame(btnType) {
    let playerChoice = document.getElementById(btnType).textContent.toLowerCase()
    let computerChoice = getComputerChoice(1, 3)

    console.log("Your Choice:", playerChoice)
    console.log("Computer Choice:", computerChoice)

    if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! ")
        computerPoints += 1
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose!")
        computerPoints += 1
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose!")
        computerPoints += 1
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You win!")
        playerPoints += 1
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("You win!")
        playerPoints += 1
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You win!")
        playerPoints += 1
    } else if (playerChoice === computerChoice){
        console.log("Draw!")
    } else {
        console.log("Please choose one of the three options!")
    }

    checkWinner()
    displayScore()
}

function checkWinner(){
    if (computerPoints === playerPoints){
        console.log("Draw!")
    } else if (computerPoints > playerPoints) {
        console.log("You lost the match!!")
    } else {
        console.log("You won the match!!")
    }
}

function displayScore() {
    console.log("Computer Points:", computerPoints)
    console.log("Your Points:", playerPoints)
}


function displayPlay(btnType) {
    let playerChoice = document.getElementById(btnType).textContent.toLowerCase()
    let computerChoice = getComputerChoice(1, 3)

    const pTag = document.createElement("p")
    pTag.textContent = "Your Choice:" + playerChoice
    container.appendChild(pTag)

    const pTagTwo = document.createElement('p')
    pTagTwo.textContent = "Computer choice:" + computerChoice
    container.appendChild(pTagTwo)

    const pTagThree = document.createElement('p')
    pTagThree.textContent = checkChoice(playerChoice, computerChoice)
    container.appendChild(pTagThree)
}

function checkChoice(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "paper") {
        return "You lose!"
        computerPoints += 1
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You lose!"
        computerPoints += 1
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "You lose!"
        computerPoints += 1
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You win!"
        playerPoints += 1
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You win!"
        playerPoints += 1
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You win!"
        playerPoints += 1
    } else if (playerChoice === computerChoice){
        return "Draw!"
    } else {
        return("Please choose one of the three options!")
    }
}