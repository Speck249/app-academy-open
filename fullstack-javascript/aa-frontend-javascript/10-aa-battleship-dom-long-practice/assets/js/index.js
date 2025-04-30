import Board from "./board.js";

document.addEventListener("DOMContentLoaded", () => {
    // Initialize new `"Board"` object
    const board = new Board();

    // Create new Elements and append to Document
    const statusUpdate = document.createElement("p");
    const resetButton = document.createElement("button");
    resetButton.innerText = "Reset Button";
    const boardContainer = document.createElement("section");
    
    document.body.appendChild(statusUpdate)
    document.body.appendChild(resetButton)
    document.body.appendChild(boardContainer);
    
    // Create 2D Grid Cells inside Board
    const createNewGrid = () => {
        for (let row = 0; row < board.numRows; row++) {
            for (let col = 0; col < board.numCols; col++) {
                const grid = document.createElement("div");
                grid.classList.add("grid-item");
                grid.setAttribute("data-id", `${row}-${col}`);
                boardContainer.appendChild(grid);
            }
        }
    }

    createNewGrid();
    
    // Create Grid interactivity with Event Delegation for each cell click.
    // null grids are `red` and non-null grids are `green` with ship length value.
    // Display string and lock grids when Player wins.
    boardContainer.addEventListener("click", (event) => {
        if (board.isGameOver() === true) {
            statusUpdate.innerText = "YOU WIN!";
            boardContainer.removeEventListener("click");
        } else {
            let [row, col] = event.target.getAttribute("data-id").split('-').map(Number)
            const val = board.makeHit(row, col);
            
            if (val === null) {
                event.target.classList.add("miss")
            } else {
                event.target.innerText = val;
                event.target.classList.add("hit")
            }
        }
    })
    
    // Reset the whole board
    resetButton.addEventListener("click", () => {
        boardContainer.innerHTML = "";
        const board = new Board();
        createNewGrid();
    })
})