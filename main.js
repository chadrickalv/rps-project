const btn1 = document.createElement('button');
btn1.textContent = "Rock";

const btn2 = document.createElement('button');
btn2.textContent = 'Paper';

const btn3 = document.createElement('button');
btn3.textContent = 'Scissors';

document.body.append(btn1, btn2, btn3);

// Active result display
const div = document.createElement('div');
div.style.marginTop = '20px';
div.classList.add('result');
document.body.append(div);

// Score display
const score = document.createElement('div');
score.style.marginTop = '20px';
score.classList.add('score');
document.body.append(score);

// Final result display
const final = document.createElement('div');
final.style.marginTop = '20px';
final.classList.add('final');
document.body.append(final);


function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)

     if (num == 0) return 'rock';
     if (num == 1) return 'paper';
     if (num == 2) return 'scissors';
}


let humanScore = 0;
let computerScore = 0;


    
function playRound (humanChoice, computerChoice) {

if (humanScore >= 5 || computerScore >= 5) return;

let result = document.querySelector('.result');
result.textContent = '';

    if (humanChoice === computerChoice) {
        result.textContent = `Its a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    }   else {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
         }

// Update score display
let score = document.querySelector('.score');
score.textContent = `Score - You: ${humanScore} Computer: ${computerScore}`;

// Show final result
    if (humanScore >= 5) {
    let final = document.querySelector('.final');
    final.textContent = 'Congratulations! You won the game!';
    } else if (computerScore >= 5) {
    let final = document.querySelector('.final');
    final.textContent = 'Sorry, you lost the game!';
    }
}

btn1.addEventListener('click', () => playRound('rock', getComputerChoice()));
btn2.addEventListener('click', () => playRound('paper', getComputerChoice()));
btn3.addEventListener('click', () => playRound('scissors', getComputerChoice()));



    /* for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}:`);
        playRound(getHumanChoice(), getComputerChoice());
    }

         console.log('\nFinal Results:');
    if (humanScore > computerScore) {
        console.log('You Win! Final score - You: ' + humanScore + ' Computer: ' + computerScore);
    } else if (computerScore > humanScore) {
        console.log('You lose! Final score - You:' + humanScore + ' Computer: ' + computerScore);
    } else {
        console.log('Its a tie! Final score - You:' + humanScore + ' Computer: ' + computerScore);
    }




    function getHumanChoice() {

    choice = choice.toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    }
}
    */

  

/*
btn1.addEventListener('click', () => playGame('Rock'));
btn2.addEventListener('click', () => playGame('Paper'));
btn3.addEventListener('click', () => playGame('Scissors'));

playGame();

*/
// rps - ui below