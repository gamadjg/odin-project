/*
 * Add on click event listener to each button
 * When clicked, run the function playRound(playerSelection Attr)
 * Call the function npcSelection(), return results
 * Compare player and npc selection
 * Update round counter
 * Display round winner
 * After 5 rounds, display who won best of 5. 
 * Insert "play again?" button
 */
//let roundCounter = 0;
//let BtnSel = playerBtnSel;

function npcSelection(){
  const oneToThreeRnd = Math.floor(Math.random() * 3 + 1);

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

function compareSelections(playerSelection, computerSelection){
  if ((playerSelection === 'rock') && (computerSelection === 'paper')){
    return 'computer win';
  }
  else if ((playerSelection === 'paper') && (computerSelection === 'scissors')){
    return 'computer win';
  }
  else if ((playerSelection === 'scissors') && (computerSelection === 'rock')){
    return 'computer win';
  }
  else if ((playerSelection === 'rock') && (computerSelection === 'scissors')){
    return 'player win';
  }
  else if ((playerSelection === 'paper') && (computerSelection === 'rock')){
    return 'player win';
  }
  else if ((playerSelection === 'scissors') && (computerSelection === 'paper')){
    return 'player win';
  }
  else{
    // playerSelection and computerSelection are equal
    return 'TIE!';
  }
}

function displayResults(roundWinner){
  console.log(roundWinner)
}

function playRound(playerSel){
  //console.log(playerSel);
  const npcSel = npcSelection();
  //console.log(npcSel);

  const roundWinner = compareSelections(playerSel, npcSel);
  displayResults(roundWinner);
}

const buttons = document.querySelectorAll(".rock, .paper, .scissors");
buttons.forEach(btn => btn.addEventListener('click', () =>{
  //console.log(btn.className);
  playRound(btn.className);
}));