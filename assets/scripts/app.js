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
  $('#getProductsButton').on('click', authEvents.onShowProduct)
  $('#update-product').on('submit', authEvents.onUpdateProduct)
  $('#delete-product').on('submit', authEvents.onDeleteProduct)
  $('#signout').on('click', authEvents.onSignOut)
  // your JS code goes here


$('#sign-up-form').hide()
$('#sign-out-form').hide()
$('#changepassword').hide()
$('#create-product').hide()
$('#update-product').hide()
$('#delete-product').hide()
$('#change-password').hide()
$('#getProductsButton').hide()
$('#AddProduct').hide()
$('#update').hide()
$('#delete').hide()

$('#signup').click(function () {
  $('#sign-up-form').show()
  $('#signup').hide()
})
$('#AddProduct').click(function () {
  $('#create-product').show()
})
$('#update').click(function () {
  $('#update-product').show()
  $('#create-product').hide()
})
$('#delete').click(function () {
  $('#delete-product').show()
  $('#update-product').hide()
  $('#create-product').hide()
})
$('#changepassword').click(function () {
  $('#change-password').show()
  // $('#create-product').hide()
  })
})
