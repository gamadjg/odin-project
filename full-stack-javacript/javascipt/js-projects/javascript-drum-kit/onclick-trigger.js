function visualEnd(endKey){
    if (!endKey) return;
    if (endKey.classList.contains('playing')){
        endKey.classList.remove('playing');
    };
  };

function visualStart(eKey){
    const transitioningDiv = document.querySelector(`div[data-key="${eKey}"`);
    transitioningDiv.classList.add('playing');
    
};

function audioStart(eKey){
    const audio = document.querySelector(`audio[data-key="${eKey}"`);
    audio.currentTime = 0;
    audio.play();
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click',() => {
    const eDataKey = key.getAttribute('data-key');
    const whichDiv = document.querySelector(`div[data-key="${eDataKey}"`);

    visualStart(eDataKey),
    audioStart(eDataKey), 
    key.addEventListener('transitionend', () =>{
        visualEnd(whichDiv);
    })
}));