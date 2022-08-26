var state = {board: [], currentGame: [], savedGames: []};

function start() {
    createBoard();
    newGame();
}

function createBoard() {
    state.board = [];

    for (var i = 1; i <= 60; i++) {
        state.board.push(i);
    }
}

function newGame() {
    resetGame();
    render();
}

function render() {
    renderBoard();
}

function renderBoard() {
    var divBoard = document.querySelector('#megasena-numbers');
    divBoard.innerHTML = '';

    var ulNumbers = document.createElement('ul');

    for (var i = 0; i < state.board.length; i++) {
        var currentGame = state.board[i];

        var liNumber = document.createElement('li')
        liNumber.textContent = currentGame;

        liNumber.addEventListener('click', handleNumberClick);

        ulNumbers.appendChild(liNumber);
    }
    divBoard.appendChild(ulNumbers);
}

function handleNumberClick(event) {
    var value = Number(event.currentTarget.textContent);

    if (isNumberInGame(value)) {
        removeNumberFromGame(value);
    }else {
        addNumberToGame(value);
    }
}

function addNumberToGame(numberToAdd) {
    if (numberToAdd < 1 || numberToAdd > 60) {
        console.error('Número informado é inválido!', numberToAdd);
        return;
    }
    if (state.currentGame.lenght >= 6) {
        console.error('O jogo já está completo!');
    }
    if (isNumberInGame(numberToAdd)) {
        console.error('Este número já está no jogo.', numberToAdd);
        return;
    }
    state.currentGame.push(numberToAdd);
}

function removeNumberFromGame(numberToRemove) {
    if (numberToRemove < 1 || numberToRemove > 60) {
        console.error('Número informado é inválido!', numberToRemove);
        return;
    }

    var newGame = []   
    
    for (var i = 0; i < state.currentGame.lenght; i++){
        var currentGame = state.currentGame[i]

        if (currentGame === numberToRemove) {
            continue;
        }
        newGame.push(currentGame);
    }
    state.currentGame = newGame;
}

function isNumberInGame(numberToCheck) {
    return state.currentGame.includes(numberToCheck);
}

function saveGame() {
    if (!isGameComplete()) {
        console.error('O jogo não está completo!');
        return
    }
    state.savedGames.push(state.newGame);
}

function isGameComplete() {
    return state.currentGame.length === 6;
}

function resetGame() {
    state.currentGame = [];
}

start()