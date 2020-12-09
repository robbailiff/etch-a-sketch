const container = document.querySelector("#grid-container")
let gridSize = 16;
let drawColour = "black";
let gridLines = true;

createGrid();
     
const colourButtons = document.querySelectorAll("button.colour-change");
colourButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		e.stopPropagation;
		let choice = e.target.id;
		if (choice === "random") {
			drawColour = randomColour();
		} else if(choice === "eraser") {
			drawColour = "white";
		} else {
			drawColour = choice;
		}
	})
})

const colourPicker = document.querySelector("#picker")
colourPicker.addEventListener("input", () => {
	drawColour = colourPicker.value;
})

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
	resetGrid();
})

const gridButton = document.querySelector("#grid-lines");
gridButton.addEventListener("click", () => {
	const gridCells = document.querySelectorAll(".grid-cell");
	gridCells.forEach((cell) => {
		if (gridLines) {
			cell.style.border = "none";
		} else {
			cell.style.border = "1px solid black";
		}
	})
	gridLines = !gridLines;
})

const changeGrid = document.querySelector("#grid-slider");
changeGrid.addEventListener("input", () => {
	const sliderText = document.querySelector("#slider-text");
	sliderText.textContent = changeGrid.value;
	gridSize = changeGrid.value;
	resetGrid();
})

function createGrid(){
	for (let i = 1; i <= gridSize**2; i++) {
	    const newCell = document.createElement("div");
	    newCell.classList.add("grid-cell");
	    container.append(newCell);
	}

	container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;

	const cells = document.querySelectorAll(".grid-cell");
	cells.forEach((cell) => {
		cell.addEventListener("mouseenter", (e) => {
			if (drawColour === "rainbow") {
				e.target.style.backgroundColor = randomColour();
			} else {
				e.target.style.backgroundColor = drawColour;
			}
		})
	})
}

function randomColour(){
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	const rgbColour = `rgb(${red}, ${green}, ${blue})`;
	return rgbColour;
}

function resetGrid() {
	while(container.firstChild) {
		container.removeChild(container.firstChild);
	}
	createGrid();
}