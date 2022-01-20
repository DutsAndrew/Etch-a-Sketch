// function to hold the grid. Numbers will be used as arguments in following functions for the amount of columns or rows to build.
function buildGrid() {
    makeRows(16);
    makeColumns(16);
};

// function to build the rows
function rowBuilder(rowNumber) {
    for(r = 0; r < rowNumber; r++) {
        let row = document.createElement('div');
        container.appendChild(row).className = "gridRow";
    };
};

// function to build columns. Loop for rows is needed in order to build columns: essentially the loop will trace along the row.length and for each iteration it is going to create a column with the column loop. The difference with this function vs the previous rowBuilder() is that rows[c] is being appended. So for each row the loop will place [c] (a column) inside of it. Since the rowNumber and columnNumber are each 16. It will place 16 boxes in each row and until there are 16 columns total.
function columnBuilder(cellNumber) {
    for(i = 0; i < rows.length; i++) {
        for(c = 0; c < cellNumber; c++) {
            let newCell = document.createElement('div');
            rows[c].appendChild(newCell).className = "cell";
        };
    };
};

// variables that manipulate the DOM
const container = document.querySelector("#container");
// allows access to rows on the grid, now that the function has created them.
let rows = document.querySelector('.gridRow');
// allows access to columns on the grid, now that the function has created them.
let cells = document.querySelector('.cells');