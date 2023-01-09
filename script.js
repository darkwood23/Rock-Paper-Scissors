let playerPoints = 0
let computerPoints = 0

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

function playGame() {
    let playerChoice = prompt("Enter your choce (rock, paper, scissors): ").toLowerCase()
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
}

for (i = 1; i <= 5; i++) {
    console.log("Round" + i)
    playGame()
}

console.log("Computer Points:", computerPoints)
console.log("Your Points:", playerPoints)

if (computerPoints === playerPoints){
    console.log("Draw!")
} else if (computerPoints > playerPoints) {
    console.log("You lost the match!!")
} else {
    console.log("You won the match!!")
}