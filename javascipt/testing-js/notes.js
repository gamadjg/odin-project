// When adding inline styles to a dom element, we can't use kebab-case (dash between words)

div.style.background-color // doesn't work - attempts to subtract color from div.style.background
div.style.backgroundColor // accesses the divs background-color style
div.style['background-color'] // also works
div.style.cssText = "background-color: white" // ok in a string


# Editing DOM attribues

// if id exists update it to 'theDiv' else create the id theDiv
div.setAttribute('id', 'theDiv');                              


// Get the requested attribute of the element selected. Example below will return "theDiv"
div.getAttribute('id');                                        

// Remvoe the selected elements attribute. 
div.removeAttribute('id');                                     


# DOM classes

// Add a new class to an element
div.classList.add('new');                                      

// Remove an elements class
div.classList.remove('new');                                   


// If the "active" class is attributed to the div element, remove it. 
// Vice-versa, if the "active" class IS NOT associated with the selected div, then add it (create the class if it doesn't exist)
div.classList.toggle('active');                                

# Adding Content

// Adding text to the selected node
div.textContent = 'Hello World!';

// Adding html to the selected node
div.innerHTML = '<p>Paragraph element added to the inside of the node via js</p>';

