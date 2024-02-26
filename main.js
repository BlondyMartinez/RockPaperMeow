//global variables
let playerScore = 0;
let computerScore = 0;

const CHOICES = ["rock", "paper", "meow"];
const container = document.getElementById('game-output-container');
const score = document.getElementById('score');
const computerPaw = document.getElementById('computer-paw');
const playerPaw = document.getElementById('player-paw');

//gets a random choice for the computer
function getComputerChoice(){
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

//adds a <p> to the top of the container given the text content and color
function addText(content, color) {
    container.textContent = content;
    container.style.color = color;
}

function updateScore(){
    score.textContent = `${playerScore} | ${computerScore}`;
}

//returns wether the player has tied, won or lost the round and the winning hand
function playRound(pChoice, cChoice) {
    updateComputerPaw(cChoice);
    updatePlayerPaw(pChoice);
    
    if (pChoice === cChoice) {
        return "You tie this round!";
    }
    if (
        (pChoice === "rock" && cChoice === "meow") ||
        (pChoice === "paper" && cChoice === "rock") ||
        (pChoice === "meow" && cChoice === "paper")
    ) {
        playerScore++;
        return `You win this round! ${pChoice} beats ${cChoice}.`;
    } else {
        computerScore++;
        return `You lose this round! ${cChoice} beats ${pChoice}.`;
    }
}

function updateComputerPaw(cChoice){
    switch(cChoice){
        case "rock":
            computerPaw.src = 'resources/images/cat_paw_rock_r.png';
            break;
        case "paper":
            computerPaw.src = 'resources/images/cat_paw_paper_r.png';
            break;
        case "meow":
            computerPaw.src = 'resources/images/cat_paw_meow_r.png';
            break;
    }
}

function updatePlayerPaw(pChoice){
    switch(pChoice){
        case "rock":
            playerPaw.src = 'resources/images/cat_paw_rock.png';
            break;
        case "paper":
            playerPaw.src = 'resources/images/cat_paw_paper.png';
            break;
        case "meow":
            playerPaw.src = 'resources/images/cat_paw_meow.png';
            break;
    }
}

//prints win/lose text and sets scores back to 0
function endGame() {
    const message = (playerScore === 5) ? "Congratulations! You have won!" : "You have lost the game :c";
    addText(message, (playerScore === 5) ? 'green' : 'red');
    playerScore = 0;
    computerScore = 0;
}

//plays the game
function playGame(playerChoice) {
    const roundResult = playRound(playerChoice, getComputerChoice());
    addText(roundResult, 'black')
    updateScore();

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}