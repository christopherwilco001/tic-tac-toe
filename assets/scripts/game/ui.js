'use strict'

const store = require('../store')

const getGamesSuccess = function (games) {
  const numberOfGamesPlayed = games.games.length
  $('.stats').text('Total Games Played: ' + numberOfGamesPlayed)
  setTimeout(function () {
    $('#stats-display').text('')
  }, 12000
  )
}

const getGamesFailure = function (data) {
  $('.stats').text('Something went wrong. Please try again later')
}

const createGameSuccess = function (data) {
  store.game = data.game
  $('.box').text('')
  $('.container').show(500)
  // store.gameOver = false
  // store.playerTurn = 'X'
  // $('#game-display').text('Player ' + store.playerTurn + '\'s turn')
  // $('#change-password-display').text('')
  // $('#change-password').hide()
}

const createGameFailure = function () {
  $('#message').text('Something went wrong. Try again')
}

const updateSuccess = function (data) {
}

const updateFailure = function () {
}

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  createGameSuccess,
  createGameFailure,
  updateSuccess,
  updateFailure
}
