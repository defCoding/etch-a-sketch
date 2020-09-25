const maxDimension = 50;

function colorCell() {
  this.style.backgroundColor = 'grey';
}

function reset() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  });
}

function newCanvas() {
  try {
    // Get a valid dimension.
    let dimension = parseInt(prompt(`Enter a new size for the canvas (max ${maxDimension}): `, '16'));
    if (dimension > maxDimension || dimension < 1) {
      throw "Too big!";
    }
   
    // Create new canvas from dimension.
    const canvas = document.querySelector('#canvas');
    canvas.style.setProperty('--dimension', dimension);
    canvas.innerHTML = '';
    createCanvas(dimension);
  } catch (e) {
    alert('Invalid size!');
    newCanvas();
  }
}

function createCanvas(dimension) {
  for (let i = 0; i < dimension * dimension; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', colorCell);
    canvas.appendChild(cell);
  }
}
  
