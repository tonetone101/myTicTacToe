'use strict'

const store = require('./store.js')

const signUpSuccess = data => {
  store.user = data.user
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
  alert('Sign Up successful')
}

const signUpFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
  alert('Sign Up unsuccessful')
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran. Data is :', data)
  alert('Sign In successful')
}

const signInFailure = error => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
  alert('Sign In unsuccessful')
}

const changePasswordSuccess = data => {
  store.user = data.user
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran. Data is :', data)
  alert('Password Change successful')
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
  alert('Password Change unsuccessful')
}

const signOutSuccess = data => {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran. Data is :', data)
  alert('Sign Out successful Goodbye')
}

const signOutFailure = error => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
  alert('Sign Out unsuccessful')
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