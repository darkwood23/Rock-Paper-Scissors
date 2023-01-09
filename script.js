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

let playerChoice = prompt("Enter your choce (rock, paper, scissors): ").toLowerCase()
let computerChoice = getComputerChoice(1, 3)

console.log("Your Choice:", playerChoice)
console.log("Computer Choice:", computerChoice)

if (playerChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! ")
} else if (playerChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose!")
} else if (playerChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose!")
} else if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log("You win!")
} else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log("You win!")
} else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log("You win!")
} else if (playerChoice === computerChoice){
    console.log("Draw!")
} else {
    console.log("Please choose one of the three options!")
}