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
  // console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (events) {
  event.preventDefault()

  const data = getFormFields(event.target)
  // alert('Made it to onSignUp')
  // console.log(data)
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
  // const product = data.product
  // if (product.editable === false) {
  //   $('#display.message').html('this is product of ' + data.user.email)
  // console.log(event)
  api.showProduct(data)
    .then(ui.onShowProduct)
    .catch(ui.onShowFailure)
  // } else {
  //   $('#display.message').html('this is product of ' + data.user.email)
}

// const onShowExample = function (event) {
//   event.preventDefault()
//   console.log('onShowExample ran!')
//
//   const data = getFormFields(event.target)
//   const example = data.example
//
//   if (example.id.length !== 0) {
//     api.show(example)
//       .then(ui.onShowSuccess)
//       .catch(ui.onShowFailure)
//   } else {
//     $('#message').html('<p>Please provide an example id!</p>')
//     $('#message').css('background-color', 'red')
//     console.log('Please enter an example id!')
//   }
// }
const onUpdateProduct = function (event) {
// nPrevent default reload
  event.preventDefault()
  // Get product ID input value
  const data = getFormFields(event.target)
  // returns: {product: {id: 45}}
  // console.log('productData is', data)
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

  // event.target is a button
  console.log('this event is :', event.target)

  const prodDataId = event.target.getAttribute('data-id')

  // But prodData is an empty object? :(
  console.log('prodData is', prodDataId)

  // Make API call
  api.deleteProduct(prodDataId)
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
