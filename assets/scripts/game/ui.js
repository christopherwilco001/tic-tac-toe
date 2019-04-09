'use strict'

const store = require('../store')

const getGamesSuccess = function (games) {
  const numberOfGamesPlayed = games.games.length
  $('#stats-display').text('Total Games Played: ' + numberOfGamesPlayed)
  setTimeout(function () {
    $('#stats-display').text('')
  }, 5000
  )
}

const getGamesFailure = function (formData) {
  $('#stats-display').text('Something went wrong. Please try again later')
}

const createGameSuccess = function (game) {
  store.gameId = game.game.id
  $('.box').text('')
  $('.game-div').show(500)
  store.gameOver = false
  store.playerTurn = 'X'
  $('#game-display').text('Player ' + store.playerTurn + '\'s turn')
  $('#change-password-display').text('')
  $('#change-password').hide()
}

const createGameFailure = function () {
  $('#error-message').text('Something went wrong. Try again')
}

const updateSuccess = function (game) {
}

const updateFailure = function () {
  $('#message').text('Something went wrong. Try again')
}

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  createGameSuccess,
  createGameFailure,
  updateSuccess,
  updateFailure
}
