    // Select the container
    const container = document.querySelector('.testClass');

    // Create a new div
    const content = document.createElement('div');  

    // Add a class to the new div element, if the class didn't exist previously, create and add
    content.classList.add('newClassNumberTwo');

    // add html to the inside of the new element. THIS WILL REPLACE THE EXISTING CONTENT
    content.innerHTML = "<p>this the parent div for this element was created\
		by importing another js file within the html head and\
		'defering' it, that is, set it to run after the html renders.</p>";

	container.appendChild(content);