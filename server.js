

// Declarations
const userName = prompt('Enter your name');
const userInput = prompt('Dimensions of artboard');
const artboard  = document.getElementById('playground');

(function() {
    const playground = createPlayground(userInput);
    artboard.appendChild(playground);
    createMario();
    createMushroom(userInput, defaultPosition);
})();

