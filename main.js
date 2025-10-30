// console.log("Hello World");

// console.log(Math.floor(Math.random() * 3))



function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)

    if(num == 0){
        return ('rock')
    } if (num == 1){
        return ('paper')
    } if (num == 2){
        return ('scissors')
    }
}


// console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Choose: Rock Paper Scissors!");
if (choice == 'rock') {
        return 'rock';  
    } if (choice == 'paper') {
    return 'paper';
    } if (choice == 'scissors') {
    return 'scissors';
    }
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

/* function playRound (humanChoice, computerChoice) {


   if (humanChoice === computerChoice) {
    console.log('Its a tie! You both chose ' + humanChoice)
   }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors')) {
            console.log('You win! ' + humanChoice + ' beats ' + computerChoice)
            humanScore++;
    } else if (
        (humanChoice === 'paper' && computerChoice === 'rock')) {
            console.log ('You win! ' + humanChoice + ' beats ' + computerChoice)
            humanScore++;
        } else if (
            (humanChoice === 'scissors' && computerChoice === 'paper')){
                console.log ('You win! ' + humanChoice + ' beats ' + computerChoice)
        humanScore++;
            } else if (
                (humanChoice === computerChoice)) {
        console.log('its a tie! You both chose' + humanChoice)
    }
         else {
            console.log('You lose! ' + computerChoice + ' beats ' +humanChoice)
            computerScore++;
         }
         console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
*/

//playRound(humanSelection, computerSelection)

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('its a tie! You both chose ' + humanChoice);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log ('You win! ' + humanChoice + ' beats ' + computerChoice)
        humanScore++;
    }   else {
        console.log('You lose! ' + computerChoice + ' beats ' + humanChoice)
        computerScore++;
         }

    console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`);
}

    console.log('\nRound 1');
    playRound(getHumanChoice(), getComputerChoice());

    console.log('\nRound 2');
    playRound(getHumanChoice(), getComputerChoice());

    console.log('\nRound 3');
    playRound(getHumanChoice(), getComputerChoice());

    console.log('\nRound 4');
    playRound(getHumanChoice(), getComputerChoice());

    console.log('\nRound 5');
    playRound(getHumanChoice(), getComputerChoice());

    console.log('\nFinal Results:');

    if (humanScore > computerScore) {
        console.log('You are the winner! Final score - You: ' + humanScore + ' Computer: ' + computerScore);
    } else if (computerScore > humanScore) {
        console.log('You lose! Final score - You:' + humanScore + ' Computer: ' + computerScore);
    } else {
        console.log('Its a tie! Final score - You:' + humanScore + ' Computer: ' + computerScore);
    }
}

playGame();