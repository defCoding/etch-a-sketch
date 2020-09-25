const canvas = document.querySelector('#canvas');

// Create initial cells 16 x 16.
createCanvas(16);

// Add event listeners to buttons.
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);

const newButton = document.querySelector('#new');
newButton.addEventListener('click', newCanvas);
