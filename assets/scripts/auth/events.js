const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (events) {
  event.preventDefault()
  const data = getFormFields(events.target)
  // alert('Made it to onSignUp')
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (events) {
  event.preventDefault()

  const data = getFormFields(events.target)
  // alert('Made it to onSignUp')
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (events) {
  event.preventDefault()

  const data = getFormFields(event.target)
  // alert('Made it to onSignUp')
  console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function () {
  // console.log('signoutsuccessfull')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateProduct = function (events) {
  event.preventDefault()
  // console.log('product Created!')
  const data = getFormFields(event.target)
  // console.log(event)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}
const onShowProduct = function (events) {
  event.preventDefault()
  // ajaxCalls.showStatsAjaxCall()
  const data = getFormFields(event.target)
  // console.log(event)
  api.showProduct(data)
    .then(ui.onShowProduct)
    .catch(ui.onShowFailure)
}

const onUpdateProduct = function (event) {
// nPrevent default reload
  event.preventDefault()
  // Get product ID input value
  const data = getFormFields(event.target)
  // returns: {product: {id: 45}}
  console.log('productData is', data)
  // Make API call
  api.updateProduct(data)
  // Handle success
    // .then(console.log)
    .then(ui.onUpdateProduct)
    // .then(ui.success)
    // Handle Failure
    .catch(ui.onUpdateFailure)
  // console.log('Sync: outside .then')
}
const onDeleteProduct = function (event) {
// nPrevent default reload
  event.preventDefault()
  // Get Product ID input value
  const prodData = getFormFields(event.target)
  // returns: {product: {id: 45}}
  console.log('prodData is', prodData)
  // Make API call
  api.deleteProduct(prodData)
  // Handle success
    // .then(console.log)
    .then(ui.onDeleteProduct)
    .catch(ui.onDeleteFailure)
    // .then(ui.success)
    // Handle Failure
    // .catch(ui.error)
  // console.log('Sync: outside .then')
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onUpdateProduct,
  onCreateProduct,
  onShowProduct,
  onDeleteProduct
}
