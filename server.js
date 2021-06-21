

// Declarations
const userName = prompt('Enter your name');
const userInput = prompt('Dimensions of artboard');
const artboard  = document.getElementById('playground');
const artBoardData = create2DArray(userInput);


(function() {
    const playground = createPlayground(userInput);
    artboard.appendChild(playground);
    createMario();
    createMultipleAsset(artBoardData, defaultPosition, 'm');
    createMultipleAsset(artBoardData, defaultPosition, 'p');
})();
