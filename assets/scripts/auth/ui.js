'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Sign up success!')
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  $('#message').text('sign up failure!')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message')('Sign in success!')
  $('form').trigger('reset')
  store.user = data.user
}

const signInFailure = function (data) {
  $('#message').text('Sign in failure!')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#message')('Changed password success')
  $('form').trigger('reset')
  store.user = data.user
}

const changePasswordFailure = function (data) {
  $('#message')('change password failure')
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
