const Gameboard = (() => {
  let board = new Array(9).fill('');
  const getBoard = () => [...board];
  let turnsPlayed = 0;

  // const getTurns = () => turnsPlayed;

  let player1Score = 0;
  let player2Score = 0;

  function checkForWin() {
    if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
      // rows
      document.querySelector('h3').textContent =
        displayController.currentPlayer.getName() + ' Wins';
      turnsPlayed = 0;
      return true;
    } else if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
      // rows
      document.querySelector('h3').textContent =
        displayController.currentPlayer.getName() + ' Wins';
      turnsPlayed = 0;
      return true;
      // [3, 4, 5];
    } else if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
      // rows
      turnsPlayed = 0;
      document.querySelector('h3').textContent =
        displayController.currentPlayer.getName() + ' Wins';
      return true;
      // [6, 7, 8];
    } else if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') {
      // columns
      turnsPlayed = 0;
      document.querySelector('h3').textContent =
        displayController.currentPlayer.getName() + ' Wins';
      return true;
      // [0, 3, 6];
    } else if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
      // columns
      turnsPlayed = 0;
      document.querySelector('h3').textContent =
        displayController.currentPlayer.getName() + ' Wins';
      return true;
      // [1, 4, 7];
    } else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
      // columns
      turnsPlayed = 0;
      document.querySelector('h3').textContent =
        displayController.currentPlayer.getName() + ' Wins';
      return true;
      // [2, 5, 8];
    } else if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
      // diagonal
      turnsPlayed = 0;
      document.querySelector('h3').textContent =
        displayController.currentPlayer.getName() + ' Wins';
      return true;
      // [0, 4, 8];
    } else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
      // diagonal
      turnsPlayed = 0;
      document.querySelector('h3').textContent =
        displayController.currentPlayer.getName() + ' Wins';
      return true;
      // [2, 4, 6];
    } else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
      //row
      turnsPlayed = 0;
      document.querySelector('h3').textContent =
        displayController.currentPlayer.getName() + ' Wins';
      return true;
      // [0, 1, 2];
    } else if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
      // rows
      turnsPlayed = 0;
      document.querySelector('h3').textContent =
        displayController.currentPlayer.getName() + ' Wins';
      return true;
      // [3, 4, 5];
    } else if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
      // rows
      turnsPlayed = 0;
      document.querySelector('h3').textContent =
        displayController.currentPlayer.getName() + ' Wins';
      return true;
      // [6, 7, 8];
    } else if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') {
      // columns
      turnsPlayed = 0;
      document.querySelector('h3').textContent =
        displayController.currentPlayer.getName() + ' Wins';
      return true;
      // [0, 3, 6];
    } else if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
      // columns
      turnsPlayed = 0;
      document.querySelector('h3').textContent =
        displayController.currentPlayer.getName() + ' Wins';
      return true;
      // [1, 4, 7];
    } else if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
      // colmuns
      turnsPlayed = 0;
      document.querySelector('h3').textContent =
        displayController.currentPlayer.getName() + ' Wins';
      return true;
      // [2, 5, 8];
    } else if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
      // diagonal
      turnsPlayed = 0;
      document.querySelector('h3').textContent =
        displayController.currentPlayer.getName() + ' Wins';
      return true;
      // [0, 4, 8];
    } else if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
      // diagonal
      turnsPlayed = 0;
      document.querySelector('h3').textContent =
        displayController.currentPlayer.getName() + ' Wins';
      return true;
      // [2, 4, 6];
    } else if (turnsPlayed === 9) {
      turnsPlayed = 0;
      document.querySelector('h3').textContent = 'Its a tie';
      return true;
    }
  }

  const addmarker = (index, marker) => {
    board[index] = marker;
    turnsPlayed++;
  };

  const reset = () => board.fill('');

  return {
    checkForWin,
    addmarker,
    reset,
    getBoard,
  };
})();

const Player = (name, marker) => {
  const getName = () => name;
  const getMarker = () => marker;

  return {
    getName,
    getMarker,
  };
};

const displayController = (() => {
  const game = document.querySelector('#game');
  const userBoard = document.querySelectorAll('article');

  // function addd() {
  const newName = document.querySelector('#new-name');
  newName.addEventListener('click', () => {
    document.querySelector('#modal').showModal();
  });

  const btn = document.querySelector('#form-btn');
  btn.addEventListener('click', addPlayer);
  let names;
  function addPlayer(e) {
    e.preventDefault();
    names = document.querySelector('input').value;
    // player1 = Player(names);
    document.querySelector('#modal').close();
    // return names;
  }
  // }

  let player1 = Player('Player 1', 'X');
  let player2 = Player('Computer', 'O');
  let currentPlayer = player1;

  // event delegation
  game.addEventListener('click', addToBoard);
  const resetBtn = document.querySelector('#reset');

  function addToBoard(e) {
    const { target } = e;
    if (!target.matches('article')) return;

    if (target.classList.contains('board')) {
      if (target.textContent) return;
      target.textContent = displayController.currentPlayer.getMarker();
      let set = Gameboard.addmarker;
      set(target.dataset.cell, displayController.currentPlayer.getMarker());

      console.log(Gameboard.getBoard());
      let g = Gameboard.checkForWin();
      console.log(g);
      displayController.switchPlayers();

      if (g === true) {
        game.removeEventListener('click', addToBoard);
        Gameboard;
      }
    }
  }

  resetBtn.addEventListener('click', reset);

  function reset() {
    Gameboard.reset();
    userBoard.forEach((b) => {
      b.textContent = '';
    });
    game.addEventListener('click', addToBoard);
    document.querySelector('h3').textContent = '';
    location.reload(true);
  }

  const switchPlayers = () => {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  };

  return {
    switchPlayers,
    get currentPlayer() {
      return currentPlayer;
    },
  };
})();
