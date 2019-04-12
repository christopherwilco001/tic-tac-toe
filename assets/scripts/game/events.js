'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

// game board

let gameBoard = ['', '', '', '', '', '', '', '', '']

// player turn

let playerTurn = 'X'

let gameOver = false


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
    gameOver = true
    $('message').text('Draw!')
  }
}

// const endGame = function () {
//   if (gameOver === true) {
//
//   }
// }

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



const newGame = function (event) {
  event.preventDefault()
  gameBoard = ['', '', '', '', '', '', '', '', '']
  playerTurn = 'X'
  gameOver = false

  api.newGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const getGames = function () {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const addHandlers = function () {
  $('.box').on('click', onClick)
  $('#create').on('submit', newGame)
  $('.stats').on('submit', getGames)
}

module.exports = {
  addHandlers,
  gameOver,
  winConditions
}
