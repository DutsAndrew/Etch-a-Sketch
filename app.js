// variables that manipulate the DOM
const container = document.querySelector("#container");

// creates the 16x16 grid
function grid() {
    makeRows(16);
    makeColumns(16);
}

// function that builds rows using the (rows) input
function makeRows(rowNumber) {
    for(r = 0; r < rowNumber; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};