function getComputerChoice(){
    var index = Math.floor(Math.random() * 3);
    var choice = "";

    switch(index){
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }

    return choice;
}

var playerScore = 0;
var computerScore = 0;

function playRound(playerChoice, computerChoice) {
    var pChoice = playerChoice.toUpperCase();
    var cChoice = computerChoice.toUpperCase();

    let result = "";

    if (pChoice === cChoice) {
        result = "You tie this round!";
        return result;
    }

    switch(pChoice){
        case "ROCK":
            if (cChoice === "PAPER") {
                result = "You lose this round! Paper beats rock.";
                computerScore++;
            } else if (cChoice === "SCISSORS") {
                result = "You win this round! Rock beats scissors.";
                playerScore++;
            }
            break;
        case "PAPER":
            if (cChoice === "ROCK") {
                result = "You win this round! Paper beats rock.";
                playerScore++;
            } else if (cChoice === "SCISSORS") {
                 result = "You lose this round! Scissors beat paper.";
                 computerScore++;
            }
            break;
        case "SCISSORS":
            if (cChoice === "PAPER") {
                result = "You win this round! Scissors beat paper.";
                playerScore++;
            } else if (cChoice === "ROCK") {
                result = "You lose this round! Rock beats scissors.";
                computerScore++;
            }
            break;
    }

    return result;
}

function playGame() {
    for(let i = 0; i < 5; i++){
        const computerChoice = getComputerChoice();
        console.log(playRound(prompt("Rock, paper or scissors. Choose one!"), computerChoice));
    }
    
    let result = (playerScore > computerScore) ? "You have won against the computer!" : "You have lost against the computer :c";

    if (playerScore ==  computerScore) result = "You have tied against the computer.";

    console.log(result);
}

playGame();