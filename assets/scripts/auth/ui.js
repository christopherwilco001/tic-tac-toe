'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#sign-up').show()
  // sign up message successful
  $('#sign-up').text('Sign in successful!')
  // sign up message hidden
  $('#sign-up').hide(2000)
  // resets the form
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  $('#sign-up').text('Something went wrong. Try again!')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  // storing user data to the store
  store.user = data.user
  // show log in message
  $('#sign-in').show()
  // login successful message
  $('#sign-in').text('You logged in successfully!')
  // login message hidden
  $('#sign-in').hide(2000)
  // signup and sign in form hidden
  $('.sign-in-container').hide(2000)
  $('#sign-up').hide(2000)
  // sign out button revealed
  // $('#sign-out').removeClass('signingOut')
  // new game button class is removed and the button is revealed
  // $('#create').removeClass('newGame')
  // change password class is removed and it is revealed
  // $('#change-password').removeClass('#change-password')
  // to show the button after sign out has been used
  $('#change-password').show()
  // board is shown after signout has been used
  // $('.container').show()
  // shows sign-out button
  $('#sign-out').show()
  // resetting the form
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  $('#sign-in').show()
  $('#sign-in').text('Sign in failure!')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#change-password').show()
  $('#change-password').text('You changed your password successfully!')
  setTimeout(function () {
    $('#change-password').text('')
  }, 2000)
  $('form').trigger('reset')
  store.user = data.user
}

const changePasswordFailure = function (data) {
  $('#change-password').show()
  $('#change-password').text('Something went wrong try again.')
  setTimeout(function () {
    $('#change-password').text('')
  }, 2000)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  // resets the form
  // $('form').trigger('reset')
  // // show sign out message
  // $('.sign-out-container').show()
  // // sign out message
  // $('.sign-out-container').text('Signed out successfully!')
  // // hides sign out message
  // $('.sign-out-container').hide(4000)
  // // hides change password
  // $('#change-password').hide()
  // // shows sign up and sign in form
  // $('#sign-in').show()
  // $('#sign-up').show()
  // // hides sign out
  // $('#sign-out').hide()
  // // hides the board
  // $('.container').hide()
  // // hides the number of games played on sign out
  // // $('#numberOfGames').hide()
  // // hides password change
  // $('#change-password').hide()
  // // hides messagebox
  // // $('.mess').hide()
  // store.user = null
}

const signOutFailure = function () {
  $('#sign-out').text('Sign out failed, try again.')
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
