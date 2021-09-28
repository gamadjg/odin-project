// double-forward of /**/ for comments
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox-dev-icon.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
/*
// selecting the h1 element and replacing the text
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/
/*
// Conditionals
let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}
*/


/*
// Creating your own functions
function multiplyyy(num1, num2){
  let result = num1 * num2;
  return result;
}

alert(multiplyyy(2, 4));
*/


/*
// Creating a nameless fucntion
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/
