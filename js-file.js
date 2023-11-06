//Grid creation
const squareContainer = document.querySelector("#squares");
function createGrid(dimension) {
    for (let row = 0; row < dimension; row++) {
        let rowDiv = document.createElement("div")
        rowDiv.setAttribute("id", "rowDiv")
        squareContainer.appendChild(rowDiv)
        for (let col = 0; col < dimension; col++) {
            let square = document.createElement("div");
            rowDiv.appendChild(square)
            square.setAttribute("id", "square")
            //change square colors when hovered over
            square.addEventListener('mouseover', function(event) {
                const source = event.target;
                source.style.backgroundColor = "blue";
            });
        }
    }
}

const dimensionButton = document.querySelector("button");
dimensionButton.addEventListener('click', () => {
    let val = Number(prompt("New Dimension [1,100]: "));
    while (isNaN(val) || val < 1 || val > 100) {
        val = Number(prompt("Please enter a valid number [1,100]: "));
    }
    while (squareContainer.firstChild) {
        squareContainer.firstChild.remove()
    }
    createGrid(val);
});