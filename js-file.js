//Grid creation
const squareContainer = document.querySelector("#squares");
for (let row = 0; row < 15; row++) {
    let rowDiv = document.createElement("div")
    rowDiv.setAttribute("id", "rowDiv")
    squareContainer.appendChild(rowDiv)
    for (let col = 0; col < 15; col++) {
        let square = document.createElement("div");
        rowDiv.appendChild(square)
        square.setAttribute("id", "square")
        square.addEventListener('mouseover', function(event) {
            const source = event.target;
            source.style.backgroundColor = "blue";
            console.log("happened");
        });
    }
}