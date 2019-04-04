const store = require('../store')

const signUpSuccess = function (data) {
  console.log('sign up success ran with the data: ', data)
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  console.log('sign up failure ran with the data: ', data)
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  console.log('sign in success ran with the data: ', data)
  $('form').trigger('reset')
  store.user = data.user
}

const signInFailure = function (data) {
  console.log('sign in failure ran with the data: ', data)
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  console.log('change password success: ', data)
  $('form').trigger('reset')
  store.user = data.user
}

const changePasswordFailure = function (data) {
  console.log('change password failure: ', data)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  console.log('sign out success')
  $('form').trigger('reset')
}

const signOutFailure = function () {
  console.log('sign out failure')
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
