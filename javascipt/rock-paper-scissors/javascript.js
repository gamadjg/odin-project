function computerPlay(){
    let oneToThreeRnd = Math.floor(Math.random() * 3 + 1);

    if (oneToThreeRnd === 1){
        return 'rock';
    }
    else if (oneToThreeRnd === 2){
        return 'paper';
    }
    else{
        return 'scissors'
    }
}

function playerPlay(){
    let oneToThreeRnd = Math.floor(Math.random() * 3 + 1);

    if (oneToThreeRnd === 1){
        return 'rock';
    }
    else if (oneToThreeRnd === 2){
        return 'paper';
    }
    else{
        return 'scissors'
    }
}
//console.log(computerPlay());

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && (computerSelection === 'paper')){
        return 'you lose';
    }
    else if (playerSelection === 'paper' && (computerSelection === 'scissors')){
        return 'you lose';
    }
    else if (playerSelection === 'scissors' && (computerSelection === 'rock')){
        return 'you lose';
    }
    else if (playerSelection === 'rock' && (computerSelection === 'scissors')){
        return 'you win';
    }
    else if (playerSelection === 'paper' && (computerSelection === 'rock')){
        return 'you win';
    }
    else if (playerSelection === 'scissors' && (computerSelection === 'paper')){
        return 'you win';
    }
    else{
        // playerSelection and computerSelection are equal
        return 'TIE!';
    }
}

function game(){
    let myWins = 0;
    let computerWins = 0;
    let playerSelection = '';
    let result = '';

    for (i=1; i<=5; i++){
        //playerSelection = prompt("Enter rock, paper, or scissors");
        result = playRound(playerPlay(), computerPlay());
        
        console.log(result);

        if(result === 'you win'){
            myWins+=1;            
        }
        else if(result === 'you lose'){
            computerWins+=1;
        }
        else{
            // Do nothing on a tie. 
        }

        console.log('win:' +myWins);
        console.log('loss:' +computerWins);
    }
     if(myWins > computerWins){
         console.log('You won best of 3!!!');
     }
     else if(myWins === computerWins){
        console.log('You tied...');
     }
     else{
        console.log('You lost best of 3...');
     }
}

game()