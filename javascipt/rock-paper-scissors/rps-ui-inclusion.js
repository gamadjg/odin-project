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

function compareSelections(){

}

function displayResults(){

}

function playRound(playerSel){
  //console.log(playerSel);
  const npcSel = npcSelection();
  //console.log(npcSel);

  const roundWinner = compareSelections(playerSel, npcSel);
  displayResults();
}

const buttons = document.querySelectorAll(".rock, .paper, .scissors");
buttons.forEach(btn => btn.addEventListener('click', () =>{
  //console.log(btn.className);
  playRound(btn.className);
}));