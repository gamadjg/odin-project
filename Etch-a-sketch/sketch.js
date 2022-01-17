const tbContainer = document.getElementById("topbar");

const tb_title = document.createElement("h1");
tb_title.textContent = "Etch-a-sketch";
tb_title.classList.add("tb_title");
tbContainer.appendChild(tb_title);

const tb_directions_container = document.createElement("ul");
tb_directions_container.classList.add("tb_directions");
tbContainer.appendChild(tb_directions_container)

const tb_directions_list = document.createElement("ul")
tb_directions_list.innerHTML = "\
    <li>Scroll over the green grid items to convert them to purple</li>"

tb_directions_container.appendChild(tb_directions_list)


const tb_button = document.createElement("button");
tb_button.textContent = "Reset";
tb_button.classList.add("tb_button");
tb_button.addEventListener('click', (button) => {
    if (confirm('Reset grid?')){
           location.reload()
    }
    
})

tbContainer.appendChild(tb_button);



const grid_container = document.getElementById('grid-c');

for (let i = 1; i<=16; i++) {
    const horizontalGrid = document.createElement('div')
    horizontalGrid.classList.add('row')
    grid_container.appendChild(horizontalGrid)

    for (let j = 1; j<=16; j++) {
        const verticalGrid = document.createElement('div')
        verticalGrid.classList.add('col')
        horizontalGrid.appendChild(verticalGrid)
    }
}
//var file = location.pathname.split("Etch-a-sketch/sketch-styles.css", "/" ).pop();

const link = document.createElement( "link" );
link.rel = "stylesheet";
link.href = 'sketch-styles.css'//.substr( 0, file.lastIndexOf( "." ) ) + ".css";
//link.type = "text/css";
//link.media = "screen,print";
document.getElementsByTagName( "head" )[0].appendChild( link );

//const gridDiv = document.querySelectorAll('.col')
/*
const gridrecolor = document.querySelector('.grid-c')
gridrecolor.addEventListener("mouseenter", function( event ) {
    event.target.style.color = "purple";
})
*/
const gridDiv = document.querySelectorAll('.col')
gridDiv.forEach((gdiv) => {
    gdiv.addEventListener("mouseenter", () => {
        //gdiv.target.style.color = "purple";
        gdiv.style.backgroundColor = 'purple';
        //gdiv.target.style.color = "purple";
    })
})
