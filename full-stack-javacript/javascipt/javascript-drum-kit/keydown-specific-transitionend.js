function startProcess(e){
  /*
  - Find the audio element with the same data-key as the keydown keyCode. 
  - Find the element with the "key" class that has the same data-key as the keydown keyCode. 
  - If no audio element exists for the selected key, return and do nothing. 
  - Set the current play time back to zero if the audio file is currently playing. 
  - Play the audio elements file. 
  - Add the 'playing' class to the referenced key element. 
  */
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
};

function endTransition(e){
  /*
  - Find the previously played element by comparing its data-key to the keyup keyCode. 
  - If the endKey is null, i.e. no element is assocated with the keyup's keyCode, return and do nothing. 
  - If the endKey contains the class 'playing', remove the class. 
  */
  const endKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!endKey) return;
  if (endKey.classList.contains('playing')){
    endKey.classList.remove('playing');
  };
}

// Keydown event listener, run the startProcess function to play the corresponding element's sound and start it's CSS transition. 
window.addEventListener("keydown", startProcess);
// Keyup event listener, run the endTransition function to revert the recently started element back to its original state. 
window.addEventListener("keyup", endTransition);