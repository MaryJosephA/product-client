'use strict'
const authEvents = require('./auth/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#create-product').on('submit', authEvents.onCreateProduct)
  $('#get-products').on('submit', authEvents.onShowProduct)
  $('#update-product').on('submit', authEvents.onUpdateProduct)
  $('#sign-out-form').on('submit', authEvents.onSignOut)

  // your JS code goes here
})
