function createTopBar(){
    const tbContainer = document.getElementById("topbar");

    const tb_title = document.createElement("h1");
    tb_title.textContent = "Etch-a-sketch";
    tb_title.classList.add("tb_title");
    tbContainer.appendChild(tb_title);

    const tb_directions_container = document.createElement("ul");
    tb_directions_container.classList.add("tb_directions");
    tbContainer.appendChild(tb_directions_container)

    const tb_directions_list = document.createElement("ul")
    tb_directions_list.innerHTML = "\<li>Scroll over the green grid items to convert them to purple</li>"
    tb_directions_container.appendChild(tb_directions_list)

    const tb_button = document.createElement("button");
    tb_button.textContent = "Reset";
    tb_button.classList.add("tb_button");
    tb_button.addEventListener('click', function() {
        const newSize = prompt('Enter a new grid size between 1 & 100. If left blank, will default to 10.')
        console.log(newSize)
        if (newSize != null){
            if ((newSize < 1 ) | (newSize > 100)){
                gridSize = 10
            }else{
                gridSize = newSize
            }
            console.log(gridSize)
            const parentNode = document.getElementById("grid-c")
            removeAllChildNodes(parentNode)
            startSketch()
        }else{
            return;
        }
    })
    tbContainer.appendChild(tb_button);
}

function startSketch() {
    console.log(gridSize)
    const grid_container = document.getElementById('grid-c');
    for (let i = 1; i<=gridSize; i++) {
        const horizontalGrid = document.createElement('div')
        horizontalGrid.classList.add('row')
        grid_container.appendChild(horizontalGrid)

        for (let j = 1; j<=gridSize; j++) {
            const verticalGrid = document.createElement('div')
            verticalGrid.classList.add('col')
            horizontalGrid.appendChild(verticalGrid)
        }
    }

    const link = document.createElement( "link" );
    link.rel = "stylesheet";
    link.href = 'sketch-styles.css'//.substr( 0, file.lastIndexOf( "." ) ) + ".css";
    document.getElementsByTagName( "head" )[0].appendChild( link );

    const gridDiv = document.querySelectorAll('.col')
    gridDiv.forEach((gdiv) => {
        gdiv.addEventListener("mouseenter", () => {
            gdiv.style.backgroundColor = 'purple';
        })
    })
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

var gridSize = 16
createTopBar()
startSketch()