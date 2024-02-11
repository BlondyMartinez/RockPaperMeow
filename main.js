//global variables
let playerScore = 0;
let computerScore = 0;

//gets a random choice for the computer
function getComputerChoice(){
    let index = Math.floor(Math.random() * 3);
    let choice = "";

    switch(index){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }

    return choice;
}

//adds a <p> to the top of the container given the text content and color
function addPToDoc(content, color) {
    let container = document.getElementById('game-output-container');
    let p = document.createElement('p');

    p.textContent = content;
    p.style.color = color;

    container.insertBefore(p, container.firstChild);
}

//returns wether the player has tied, won or lost the round and the winning hand
function playRound(pChoice, cChoice) {
    let result = "";

    if (pChoice === cChoice) {
        result = "You tie this round!";
        return result;
    }

    switch(pChoice){
        case "rock":
            if (cChoice === "paper") {
                result = "You lose this round! Paper beats rock.";
                computerScore++;
            } else if (cChoice === "scissors") {
                result = "You win this round! Rock beats scissors.";
                playerScore++;
            }
            break;
        case "paper":
            if (cChoice === "rock") {
                result = "You win this round! Paper beats rock.";
                playerScore++;
            } else if (cChoice === "scissors") {
                 result = "You lose this round! Scissors beat paper.";
                 computerScore++;
            }
            break;
        case "scissors":
            if (cChoice === "paper") {
                result = "You win this round! Scissors beat paper.";
                playerScore++;
            } else if (cChoice === "rock") {
                result = "You lose this round! Rock beats scissors.";
                computerScore++;
            }
            break;
    }

    return result;
}

//prints win/lose text and sets scores back to 0
function endGame() {
    if (playerScore == 5) addPToDoc("Congratulations! You have won the game!", 'green');
    else addPToDoc("You have lost the game :c", 'red');

    playerScore = 0;
    computerScore = 0;
}

//plays the game
function playGame(playerChoice) {
    const roundResult = playRound(playerChoice, getComputerChoice());

    let pContent = roundResult + " " + playerScore + " | " + computerScore;
    addPToDoc(pContent, 'black');

    if (playerScore == 5 || computerScore == 5) {
        endGame();
    }
}