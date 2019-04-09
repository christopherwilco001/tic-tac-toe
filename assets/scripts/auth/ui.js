'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#sign-up-display').text('New account created! Please sign in below.')
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
  $('#sign-up-display').text('Something went wrong. Please try again.')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.sign-up-sign-in-div').hide()
  $('.container').hide()
  $('.stats').show()
  $('#change-password').show()
  $('#change-password').hide()
  $('#sign-out').show()
}

const signInFailure = function (data) {
  $('#message').text('Sign in failure!')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password success')
  store.user = data.user
}

const changePasswordFailure = function (data) {
  $('#message').text('change password failure')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
}

const signOutFailure = function () {
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
