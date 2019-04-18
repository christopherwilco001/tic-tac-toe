'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#sign-up').show()
  // sign up message successful
  $('#sign-up').text('Signed up successfully!')
  // sign up message hidden
  $('#sign-up').hide(2000)
  // resets the form
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  $('#smessage').text('Something went wrong. Try again!')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  setTimeout(function () {
    $('#message').text('')
  }, 1000)
  store.user = data.user
  $('#message').text('You logged in successfully!')
  $('#sign-in').hide(2000)
  $('#sign-up').hide(2000)
  $('#change-password').show()
  $('#sign-out').show()
  $('.stats').show()
  $('#create').show()
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  $('#sign-in').show(2000)
  $('#message').text('Sign in failure!')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  setTimeout(function () {
    $('#message').text('')
  }, 1200)
  $('#change-password').show()
  $('.container').show()
  $('#message').text('You changed your password successfully!')
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  setTimeout(function () {
    $('#change-password').text('')
  }, 1200)
  $('#change-password').show()
  $('#change-password').text('Something went wrong try again.')
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  setTimeout(function () {
    $('#message').text('')
  }, 1000)
  $('#sign-up').show(1200)
  $('#sign-in').show(1200)
  $('#sign-out').hide()
  $('#message').text('Sign out successful!')
  $('#change-password').hide()
  $('.container').hide()
  $('.stats').hide()
  $('#create').hide()
  store.user = null
  $('form').trigger('reset')
}

const signOutFailure = function () {
  $('#sign-out').text('Sign out failed, try again!')
  $('form').trigger('reset')
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
