const squareContainer = document.querySelector("#squares");
for (let row = 0; row < 15; row++) {
    let rowDiv = document.createElement("div")
    rowDiv.setAttribute("id", "rowDiv")
    squareContainer.appendChild(rowDivs)
    for (let col = 0; col < 15; col++) {
        let square = document.createElement("div");
        rowDiv.appendChild(square)
        square.setAttribute("id", "square")
    }
}