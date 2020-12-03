const container = document.querySelector("#grid-container")
let gridSize = 16;

for (let i = 1; i <= gridSize**2; i++) {
    const newCell = document.createElement("div");
    newCell.classList.add("grid-cell");
    container.append(newCell);
};

const cells = document.querySelectorAll(".grid-cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseenter", (e) => {
    	console.log(e);
        e.target.style.backgroundColor = "red";
    })
})
     
     