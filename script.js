const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
const resultText = document.getElementById('result');
const playerSymbol = '❤️';
const aiSymbol = '🖤';
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = playerSymbol;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

function makeMove(cellIndex, symbol) {
    if (board[cellIndex] === '') {
        board[cellIndex] = symbol;
        cells[cellIndex].textContent = symbol;
        const winner = checkWinner();
        if (winner) {
            resultText.textContent = (winner === playerSymbol) ? 'Wygrałaś!' : 'Wygrało AI!';
            setGameOver();
        } else if (board.every(cell => cell !== '')) {
            resultText.textContent = 'Remis!';
            setGameOver();
        } else {
            currentPlayer = currentPlayer === playerSymbol ? aiSymbol : playerSymbol;
            if (currentPlayer === aiSymbol) {
                aiMove();
            }
        }
    }
}

function aiMove() {
    const emptyCells = board.map((cell, index) => cell === '' ? index : -1).filter(index => index !== -1);
    const randomMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    setTimeout(() => makeMove(randomMove, aiSymbol), 500);
}

function setGameOver() {
    cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = playerSymbol;
    resultText.textContent = '';
    cells.forEach((cell, index) => {
        cell.textContent = '';
        cell.addEventListener('click', handleCellClick);
    });
}

function handleCellClick(event) {
    const cellIndex = event.target.getAttribute('data-cell');
    makeMove(cellIndex, playerSymbol);
}

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);
