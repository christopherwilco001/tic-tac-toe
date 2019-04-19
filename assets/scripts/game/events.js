'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

// game board

let gameBoard = ['', '', '', '', '', '', '', '', '']

// player turn

let playerTurn = 'X'

let gameOver = false

// Switch player function.
const turn = function () {
  if (playerTurn === 'X') {
    playerTurn = 'O'
  } else playerTurn = 'X'
  $('#message').text(`${playerTurn}, it's your turn!`)
}

// Game winning combinations.
const winConditions = function (gameBoard, playerTurn) {
  if ((gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] === playerTurn) ||
(gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] === playerTurn) ||
(gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] === playerTurn) ||
(gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] === playerTurn) ||
(gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] === playerTurn) ||
(gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] === playerTurn) ||
(gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] === playerTurn) ||
(gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] === playerTurn)) {
    gameOver = true
    $('#endMessage').text(`${playerTurn} wins!`)
  } else if (gameBoard.every(index => index !== '')) {
    gameOver = true
    $('#endMessage').text('Draw!')
  }
}

const endGame = function () {
  if (gameOver === true) {
    $('.container').hide(1000)
    setTimeout(function () {
      $('#endMessage').text('')
    }, 2000)
    $('#message').hide()
    $('#endMessage').show()
    playerTurn = 'X'
  }
}

const newGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
  $('.box').text('')
  $('#endMessage').text('')
  $('#message').show()
  gameBoard = ['', '', '', '', '', '', '', '', '']
  playerTurn = 'O'
  gameOver = false
  turn()
}

const getGames = function () {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const onClick = function (event) {
  const currentBox = $(event.target).data('id')
  const emptyBox = $(event.target).text()
  if (emptyBox === '' && playerTurn === 'X') {
    $(event.target).text(playerTurn)
    gameBoard[currentBox] = playerTurn
    winConditions(gameBoard, playerTurn)
    api.updateGame(currentBox, playerTurn, gameOver)
    endGame()
    turn()
  } else if (emptyBox === '' && playerTurn === 'O') {
    $(event.target).text(playerTurn)
    gameBoard[currentBox] = playerTurn
    winConditions(gameBoard, playerTurn)
    api.updateGame(currentBox, playerTurn, gameOver)
    endGame()
    turn()
  } else if (emptyBox !== '') {
    $('#message').text('Invalid move, try again.')
  }
}

const addHandlers = function () {
  $('.box').on('click', onClick)
  $('#create').on('submit', newGame)
  $('.stats').on('submit', getGames)
}

module.exports = {
  addHandlers
}
