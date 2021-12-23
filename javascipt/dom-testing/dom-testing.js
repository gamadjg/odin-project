// Select the container
const container = document.querySelector('.testClass');

// Create a new div
const content = document.createElement('div');  

// Add a class to the new div element, if the class didn't exist previously, create and add
content.classList.add('newClass');

// add text to the new element
content.textContent = 'test content';

container.appendChild(content);

/*
1. Add an <p> with red text that says “Hey I’m red!”
2. Add an <h3> with blue text that says “I’m a blue h3!”
3. Create a <div> with a black border and pink background color with the following
    elements inside of it:
            another <h1> that says “I’m in a div”
            a <p> that says “ME TOO!”
*/

const dom_exercises = document.querySelector('.dom_manipulation_exercises');
// Create a new div
const new_text = document.createTextNode("test text node");

dom_exercises.appendChild(new_text);

const new_p = document.createElement('p');
new_p.textContent = "Hey I'm red!";
new_p.style.color = 'Red';

const new_h3 = document.createElement('h3');
new_h3.textContent = "I'm a blue h3!";
new_h3.style.color = 'Blue';

dom_exercises.appendChild(new_p);
dom_exercises.appendChild(new_h3);

//-------------------------------------------------------------------
// new parent can be created, selected, and child nodes appended all within memory
//     i.e. elements within elements can be created before appending anything

const new_div = document.createElement('div');
new_div.classList.add("new_div_class");
new_div.style.border = 'black';
new_div.style.backgroundColor = 'Pink';

const h1_inside_new_div = document.createElement('h1');
h1_inside_new_div.textContent = "I'm in a div";

const p_inside_new_div = document.createElement('p');
p_inside_new_div.textContent = "ME TOO!";

new_div.appendChild(h1_inside_new_div);
new_div.appendChild(p_inside_new_div);
dom_exercises.appendChild(new_div);