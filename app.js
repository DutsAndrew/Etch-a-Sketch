// Auto loads a grid that is 16x16 on page open
window.onload = () => {
    buildGrid(16);
}

// variables that manipulate the DOM. "getElement" is used here in place of "querySelector" because querySelector deals with static nodelists, nodelists are like arrays but can't do the same things. In addition, since querySelector is static, the size of the array cannot change; whereas, "getElement" is dynamic, which means the array/list can grow according to needs. Since we are running a loop that is constantly adding to the list we need a dynamic list, which means we use getElement instead of querySelector.
const container = document.getElementById("container");
// allows access to rows on the grid, now that the function has created them.
const rows = document.getElementsByClassName("row");
// allows access to columns on the grid, now that the function has created them.
const cells = document.getElementsByClassName("cell");
// allows access to the clear button in HTML
const clear = document.getElementById("reset");
// allows access to the newBoard button in HTML
const newBoard = document.getElementById("newBoard");

// function to hold the grid. Numbers will be used as arguments in following functions for the amount of columns or rows to build.
function buildGrid(gridSize) {
    if (gridSize > 100) {
        alert("Whoops, your number was a little big there buddy")
        createNewBoard();
    } else if (gridSize < 1) {
        alert("Why so negative?");
        createNewBoard();
    }
    rowAndCellBuilder(gridSize);
};

// function to build the rows and cells
function rowAndCellBuilder(gridSize) {
    for(r = 0; r < gridSize; r++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("row");

        for(c = 0; c < gridSize; c++) {
            let gridCell = document.createElement("div");
            gridCell.classList.add("cell");
            gridCell.addEventListener("mouseover", colorIt);
            gridRow.appendChild(gridCell);
        }
        container.appendChild(gridRow);
    }
}

// function to color the cells
function colorIt(e) {
    e.target.style.backgroundColor = randomColor();
}

// since colors in code are used by "#0000FF" you can instead create a loop that will iterate through and randomally pick letters and numbers to select a color. [Math.Floor(Math.random())] since Math.random() returns [0, 1] you can use "16777216" for all the possible RGB color variations. But since arrays start at [0] you remove the 6 and replace it with 5 to account for that. In the for loop, it is not iterating through more than 6 numbers because the color code "#0000FF" does not have more than 6 characters at a time.
function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Listener to call clearIt()
clear.addEventListener("click", clearIt);

// Listener to start board
newBoard.addEventListener("click", createNewBoard);

// Function that will clear the Etch-a-Sketch board by refreshing the browser.
function clearIt() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.classList.remove('cell');
    })
}

// function that starts a new board
function createNewBoard() {
    let gridSize = prompt("What dimension of boxes do you want to play around with? (Max: 100, Output will take your answer L and return: L x L");
    // calls the buildGrid() function to create the grid.
    buildGrid(gridSize);
}