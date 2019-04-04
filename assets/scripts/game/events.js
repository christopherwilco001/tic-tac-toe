'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']

let playerTurn = 'X'

// const winConditions = [
//   [0, 1, 2], [3, 4, 5],
//   [6, 7, 8], [0, 3, 6],
//   [1, 4, 7], [2, 5, 8],
//   [0, 4, 8], [6, 4, 2]
// ]
//
// const createNewGame = function () {
//   event.preventDefault()
//   api.createNewGame()
//     .then(ui.createGameSuccess)
//     .catch(ui.createGameFailure)
//   $('#create-game').on('click')
//   $('.col-4').empty()
// }

const onClick = function (event) {
  const currentTurn = $(event.target).data('id')
  console.log(currentTurn)

  if (playerTurn === 'X' && $(event.target).text('')) {
    $(event.target).text('X')
    playerTurn = 'O'
  } else if (playerTurn === 'O' && $(event.target).text('')) {
    $(event.target).text('O')
    playerTurn = 'X'
  } else {

  }
}

const addHandlers = function () {
  $('.box').on('click', onClick)
}

module.exports = {
  addHandlers
}
