'use strict'

const store = require('../store')

const getGamesSuccess = function (games) {
  const numberOfGamesPlayed = games.games.length
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
  $('#message').text('Total Games Played: ' + numberOfGamesPlayed)
  $('#getGames').show()
}

const getGamesFailure = function (data) {
  $('.stats').text('Something went wrong. Please try again later.')
}

const createGameSuccess = function (data) {
  store.game = data.game
  $('.box').text('')
  $('.container').show(500)
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
