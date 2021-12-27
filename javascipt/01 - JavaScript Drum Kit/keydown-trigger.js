function playSound(e){
    // find the audio element with the same data-key as the input keyCode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // find the element with the .key class that has the same data-key as the keyCode
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  };

  function transitionEnded(e){
    if(e.propertyName != 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing');
  };

  // Add an event listener to the entire window
  window.addEventListener("keydown", playSound);

  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', transitionEnded));