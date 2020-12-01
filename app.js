const container = document.querySelector(".container")
let gridSize = 16;

for (let i = 1; i <= gridSize**2; i++) {
    const newCell = document.createElement("div");
    newCell.classList.add("grid");
    container.append(newCell);
};
