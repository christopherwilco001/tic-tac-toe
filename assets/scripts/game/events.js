'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

// game board

let gameBoard = ['', '', '', '', '', '', '', '', '']

// player turn

let playerTurn = 'X'

let gameOver = false


// const clearBoard = function () {
//   for (let i = 0; i < gameBoard.length; i++) {
//     gameBoard[i] = ' '
//   }
// }

const winConditions = function (gameBoard, playerTurn) {
  if ((gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== '') ||
(gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== '') ||
(gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== '') ||
(gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== '') ||
(gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== '') ||
(gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== '') ||
(gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== '') ||
(gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== '')) {
    $('#message').text('player ' + playerTurn + ' wins')
  } else if (gameBoard.every(index => index !== '')) {
    // gameOver = true
    $('message').text('Draw')
  }
}

// //   [0, 1, 2], [3, 4, 5],
// //   [6, 7, 8], [0, 3, 6],
// //   [1, 4, 7], [2, 5, 8],
// //   [0, 4, 8], [6, 4, 2]
// // ]
// //

const onClick = function (event) {
  const currentBox = $(event.target).data('id')

  if ($(event.target).text() === '') {
    $(event.target).text(playerTurn)
    gameBoard[currentBox] = playerTurn
    winConditions(gameBoard, playerTurn)
    if (playerTurn === 'X') {
      playerTurn = 'O'
    } else {
      playerTurn = 'X'
    }
  } else {
    $('#message').text('You dont want to do that!')
  }
}

// const winConditions = [
//   [$('#zero').text(), $('#one').text(), $('#two').text()],
//   // row 1
//   [$('#three').text(), $('#four').text(), $('#five').text()],
//   // row 2
//   [$('#six').text(), $('#seven').text(), $('#eight').text()],
//   // row 3
//   [$('#zero').text(), $('#three').text(), $('#six').text()],
//   // col 1
//   [$('#one').text(), $('#four').text(), $('#seven').text()],
//   // col 2
//   [$('#two').text(), $('#five').text(), $('#eight').text()],
//   // col 3
//   [$('#zero').text(), $('#four').text(), $('#eight').text()],
//   // diag 1
//   [$('#two').text(), $('#four').text(), $('#six').text()]
//   // diag 2
// ]

// for (let i = 0; i < board.length; i++) {
//   if (board[i]) {
//   }
//   // console.log('Win')
// }

// if (board[0] === board[1] && board[1] === board[2] === 'X')

// if (playerWin === true) {
//   console.log('current player wins!')
//
//

const newGame = function (data) {
  gameBoard = ['', '', '', '', '', '', '', '', '']
  playerTurn = 'X'
  gameOver = false

  api.newGame(newGame)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGetGames = function () {
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const addHandlers = function () {
  $('.box').on('click', onClick)
  $('create').on('click', newGame)
  $('#getGames').on('click', onGetGames)
}

module.exports = {
  addHandlers,
  gameOver,
  // clearBoard,
  winConditions
}
