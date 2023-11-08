//Grid creation
const squareContainer = document.querySelector("#squares");
createGrid(30);

const body = document.querySelector("body");
const html = document.querySelector("html");
body.draggable = false;
let isMousePressed = false;
body.addEventListener('mousedown', () => {
    isMousePressed = true;
});
body.addEventListener('mouseup', () => {
    isMousePressed = false;
});

html.ondragstart = () => {
    return false;
}

let hslColor = {h:0, s:0, l:0}
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
            square.value = 100;
            square.addEventListener('mousemove', function(event) {
                const source = event.target;
                if (!(solidColor)) {
                    if (isMousePressed) {
                        if (source.value > hslColor.l) {
                            source.value = source.value-3;
                        }
                        source.style.cssText = "background-color: hsl("+hslColor.h+", "+hslColor.s+"%, "+String(source.value)+"%)";
                    }
                }
                else {
                    if (isMousePressed) {
                        source.style.cssText = "background-color: hsl("+hslColor.h+", "+hslColor.s+"%, "+hslColor.l+"%)";
                    }
                }
            });
            square.addEventListener('click', function(event) {
                    const source = event.target;
                    if (!(solidColor)) {
                        if (light > hslColor.l) {
                            light = light-10;
                        }
                        source.style.cssText = "background-color: hsl("+hslColor.h+", "+hslColor.s+"%, "+String(light)+"%)";
                    }
                        else {
                        source.style.cssText = "background-color: hsl("+hslColor.h+", "+hslColor.s+"%, "+hslColor.l+"%)";
                    }
            });
        }
    }
}

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', () => {
    squares = document.querySelectorAll("#square");
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "white";
        squares[i].value = 100;
    }
});

const slider = document.querySelector(".slider");
const dimensionValue = document.querySelector("#slidervalue");
slider.addEventListener('mouseup', (event) => {
    let sliderValue = event.target.value;
    while (squareContainer.firstChild) {
        squareContainer.firstChild.remove()
    }
    createGrid(sliderValue);
})
slider.addEventListener('input', (event) => {
    let sliderValue = event.target.value;
    dimensionValue.textContent = "Dimension: " + sliderValue;
})

let solidColor = false;
const select = document.querySelector("select");
select.addEventListener('change', (event) => {
    let colorChoice = event.target.value;
    if (colorChoice == "solid") {
        solidColor = true;
    }
    else {
        solidColor = false;
    }
})

const colorSelector = document.querySelector("#color");
let originalLight;
colorSelector.addEventListener('change', (event) => {
    let hexColor = event.target.value;
    hslColor = hexToHSL(hexColor);
    originalLight = hslColor.l;
})

//Taken from online
function hexToHSL(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max == min){
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        
        h /= 6;
    }

    h = Math.round(h*360);
    s = Math.round(s*100);
    l = Math.round(l*100);

    return { h, s, l };
}