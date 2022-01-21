// variables that manipulate the DOM. "getElement" is used here in place of "querySelector" because querySelector deals with static nodelists, nodelists are like arrays but can't do the same things. In addition, since querySelector is static, the size of the array cannot change; whereas, "getElement" is dynamic, which means the array/list can grow according to needs. Since we are running a loop that is constantly adding to the list we need a dynamic list, which means we use getElement instead of querySelector.
const container = document.getElementById("container");
// allows access to rows on the grid, now that the function has created them.
let rows = document.getElementsByClassName("gridRow");
// allows access to columns on the grid, now that the function has created them.
let cells = document.getElementsByClassName("cells");

// calls the buildGrid() function to create the grid.
buildGrid();

// function to hold the grid. Numbers will be used as arguments in following functions for the amount of columns or rows to build.
function buildGrid() {
    rowBuilder(16);
    columnBuilder(16);
};

// function to build the rows
function rowBuilder(rowNumber) {
    for(r = 0; r < rowNumber; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// function to build columns. Loop for rows is needed in order to build columns: essentially the loop will trace along the row.length and for each iteration it is going to create a column with the column loop. The difference with this function vs the previous rowBuilder() is that rows[c] is being appended. So for each row the loop will place [c] (a column) inside of it. Since the rowNumber and columnNumber are each 16. It will place 16 boxes in each row and until there are 16 columns total.
function columnBuilder(cellNumber) {
    for(i = 0; i < rows.length; i++) {
        for(c = 0; c < cellNumber; c++) {
            let newCell = document.createElement("div");
            rows[c].appendChild(newCell).className = "cell";
        };
    };
};

// eventListeners to catch when mouse interacts with the cells
container.addEventListener("mouseover", mouseIn, false);
container.addEventListener("mouseout", mouseOut, false);

// mouseIn function to occur when mouse enters a cell
function mouseIn() {
    container.setAttribute("style", "background-color: blue", "color: blue;")
};

// mouseOut function to occur when mouse exits a cell
function mouseOut() {
    container.setAttribute("style", "color: blue", "background-color: white;");
}