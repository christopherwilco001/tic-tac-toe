'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const board = ['', '', '', '', '', '', '', '', '']

let playerTurn = 'X'


const winConditions = [
  [0, 1, 2], [3, 4, 5],
  [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [6, 4, 2]
]
//

const onClick = function (event) {
  const currentTurn = $(event.target).data('id')
  console.log(currentTurn)

  if (playerTurn === 'X' && $(event.target).text() === '') {
    $(event.target).text('X')
    playerTurn = 'O'
  } else if (playerTurn === 'O' && $(event.target).text() === '') {
    $(event.target).text('O')
    playerTurn = 'X'
  } else {
    alert('Make another move')
  }
}

const playerWin = [
  [$('#zero').text(), $('#one').text(), $('#two').text()],
  // row 1
  [$('#three').text(), $('#four').text(), $('#five').text()],
  // row 2
  [$('#six').text(), $('#seven').text(), $('#eight').text()],
  // row 3
  [$('#zero').text(), $('#three').text(), $('#six').text()],
  // col 1
  [$('#one').text(), $('#four').text(), $('#seven').text()],
  // col 2
  [$('#two').text(), $('#five').text(), $('#eight').text()],
  // col 3
  [$('#zero').text(), $('#four').text(), $('#eight').text()],
  // diag 1
  [$('#two').text(), $('#four').text(), $('#six').text()]
  // diag 2
]

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

// const createNewGame = function (event) {
//   event.preventDefault()
//   api.createNewGame()
//     .then(ui.createGameSuccess)
//     .catch(ui.createGameFailure)
//
//   // $('.col-4').empty()
// }



const addHandlers = function () {
  $('.box').on('click', onClick)
  // $('')
  // $('#create-game').on('click', createGameSuccess)
}

module.exports = {
  addHandlers,
  winConditions,
  board,
  playerWin
}
