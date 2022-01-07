/**
 * Add on click event listener to each button
 * When clicked, run the function playRound(playerSelection Attr)
 * Call the function npcSelection(), return results
 * Compare player and npc selection
 * Update round counter
 * Display round winner
 * After 5 rounds, display who won best of 5. 
 * Insert "play again?" button
 */
 var roundCounter = 1;
 var maxGames = 5;
 var playerTotalWins = 0;
 var computerTotalWins = 0;
 var totalTies = 0;
 var playGame = true;

function findCompSelection(){
  const oneToThreeRnd = Math.floor(Math.random() * 3 + 1);

  if (oneToThreeRnd === 1){
      return 'rock';

  }else if (oneToThreeRnd === 2){
      return 'paper';
  
  }else{
      return 'scissors'
  }
}  

function compareSelections(playerSelection, computerSelection){
  if ((playerSelection === 'rock') && (computerSelection === 'paper')){
    computerTotalWins+=1;
    return 'NPC won the round';
  
  }else if ((playerSelection === 'paper') && (computerSelection === 'scissors')){
    computerTotalWins+=1;
    return 'NPC won the round';
  
  }else if ((playerSelection === 'scissors') && (computerSelection === 'rock')){
    computerTotalWins+=1;
    return 'NPC won the round';
  
  }else if ((playerSelection === 'rock') && (computerSelection === 'scissors')){
    playerTotalWins+=1;
    return 'You won the round';
  
  }else if ((playerSelection === 'paper') && (computerSelection === 'rock')){
    playerTotalWins+=1;
    return 'You won the round';
  
  }else if ((playerSelection === 'scissors') && (computerSelection === 'paper')){
    playerTotalWins+=1;
    return 'You won the round';
  
  }else{
    totalTies+=1;
    return 'TIE!';
  }
}

function endGame(){
  const roundWinnerNode = document.querySelector('.whoWon');
  const totalPlayerLosses = maxGames - totalTies - playerTotalWins;
  if (playerTotalWins > computerTotalWins){
    roundWinnerNode.textContent = `You won the game with ${playerTotalWins} wins!`
  
  }else if (playerTotalWins < computerTotalWins){
    roundWinnerNode.textContent = `You lost the game with ${totalPlayerLosses} losses...`;
  
  }else{
    roundWinnerNode.textContent = 'You and the NPC tied.'
  }
  return
}

function displayResults(roundWinner, playerSelection, computerSelection){
  const whatRound = document.querySelector('.result-counter');
  const playerResultsNode = document.querySelector('.player-selection');
  const computerResultsNode = document.querySelector('.npc-selection');
  const roundWinnerNode = document.querySelector('.whoWon');

  whatRound.textContent = roundCounter;

  if (roundCounter == maxGames){
    //const totalPlayerLosses = maxGames - totalTies - playerTotalWins;
    if (playerTotalWins > computerTotalWins){
      roundWinnerNode.textContent = `You won the game!`
    
    }else if (playerTotalWins < computerTotalWins){
      roundWinnerNode.textContent = `You lost the game`;
    
    }else{
      roundWinnerNode.textContent = 'You and the NPC tied.'
    }
    playGame = false;
    setupNewGame();

  }else if (roundCounter < maxGames) {
    playerResultsNode.textContent = playerSelection;
    computerResultsNode.textContent = computerSelection;
    roundWinnerNode.textContent = roundWinner;
    whatRound.textContent = roundCounter;
    roundCounter+=1;
  }else{
    return;
  }
}

function playRound(playerSelection){
  if (playGame){
    const computerSelection = findCompSelection();
    console.log(`comp selection: ${computerSelection}`);
    console.log(`player selection: ${playerSelection}`);

    const roundWinner = compareSelections(playerSelection, computerSelection);
    displayResults(roundWinner, playerSelection, computerSelection);
  }else{

  }
}

console.log(`round count: ${roundCounter}`);
console.log(`maxGames: ${maxGames}`);
console.log(`player wins: ${playerTotalWins}`);
console.log(`computer wins: ${computerTotalWins}`);
console.log(`total ties: ${totalTies}`);
console.log(`play?: ${playGame}`);

const buttons = document.querySelectorAll(".rock, .paper, .scissors");
buttons.forEach(btn => btn.addEventListener('click', () =>{
  playRound(btn.className);

}));
/**
 * -------------------------------FEATURES-------------------------------
 * Use the maxGames class to set how many games you would like to play
 * 
 * X - Add a play again button that resets all the counters
 * 
 * Display current player and npc wins
 */

 function setupNewGame(){
  const bodyContainer = document.querySelector('.body-c');

  const newGameContainer = document.createElement('div');
  newGameContainer.classList.add('.ng-c');
  bodyContainer.appendChild(newGameContainer);


  const ngBtn = document.createElement('button');
  ngBtn.textContent = 'Play again?';
  ngBtn.classList.add('.ngBtnClass')
  ngBtn.style.color = 'forestgreen';
  ngBtn.style.fontSize = '20px';
  ngBtn.style.padding = '10px 20px 10px 20px';
  newGameContainer.appendChild(ngBtn);

  ngBtn.addEventListener('click', () =>{
    location.reload();
  })
  /*
  newGameButton.addEventListener('click', ()=>{
    console.log('test');
    location.reload();
  });
  */
}