const store = require('../store.js')

const signUpSuccess = function () {
  $('#display-message').html('Please log in')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
}
const signUpFailure = function () {
  $('#display-message').html('sign up failed')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').hide()
  $('#sign-up-form').trigger('reset')
}
const signInSuccess = function (response) {
  $('#display-message').html('welcome' + ' ' + response.user.email)
  $('#sign-out-button').show()
  $('#view-game').show()
  $('#change-password').show()
  $('#get-products').show()
  $('#display-message').css('color', 'green')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#sign-out-button').show()
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#sign-out-button').addClass('hidden')
  // console.log($('#change-password'))
}
const signInFailure = function () {
  $('#display-message').html('oops please try again')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#change-password').trigger('reset')
}
const signOutSuccess = function () {
  $('#display-message').html('Sign Out successful')
  $('#sign-out-').hide()
  // $('#display-message').fadeOut(2000)
  $('#change-password').hide()
  $('#change-password-header').hide()
  $('#display-message').css('color', 'green')
  $('#main').hide()
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
}
const signOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
}
const changePasswordSuccess = function () {
  $('#display-message').text('Success change password')
  $('#display-message').css('color', 'green')
  $('#change-password').trigger('reset')
}
const changePasswordFailure = function () {
  $('#display-message').html('please try again')
  $('#display-message').css('color', 'green')
  $('#change-password').trigger('reset')
}
const onCreateSuccess = function (data) {
  store.product = data.product
  $('#display-message').text('sucessfully created the data')
  $('#create-product').hide()
  $('#create-product').trigger('reset')
  // console.log('onCreateSuccess ran. Data is :', data)
}

//
const onCreateFailure = function (error) {
  $('#display-message').text('Error on creating example')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}

const onUpdateProduct = function (response) {
  // store.product.id = response.product
  console.log('Async: inside .then')
  // console.log(response)
  // empty content elemen
  $('#content').html('')
  const product = response.product
  const productHTML = (`
    <div class="table-container">
      <table class="table table-striped">
  <thead>
  <tr>
    <th scope="row">product</th>
    <td>quantity</td>
    <td>id</td>
  </tr>

  </thead>
  <tbody>
  <tr>
    <th scope="col">${product.prod_name}</th>
    <th scope="col">${product.quantity}</th>
    <th scope="col">${product.id}</th>

  </tr>
    </tbody>
    </table>
    </div>

    `)
  $('#display-message').text('Updated')
  $('#update-product').trigger('reset')
  // append bookHTML to content
  $('#content').append(productHTML)
}
// <p>ID: ${product.id}</p>
// <h4>prod_name: ${product.prod_name}</h4>
// <p>Quantity: ${product.quantity}</p>
// <br />

const onUpdateFailure = function (error) {
  $('#display-message').text('Error on updating product')
  $('#display-message').removeClass()
  $('#display-message').addClass('failure')
  console.error('onUpdateFailure ran. Error is :', error)
}
const onShowProduct = function (response) {
  // console.log('Async: inside .then')
  // console.log(response)
  // empty content elemen
  $('#content').html('')

  // loop through API response data
  response.products.forEach(product => {
    // build HTML element with data
    const productHTML = (`

    <div class="table-container">
      <table class="table table-striped">
  <thead>
  <tr>
    <th scope="row">product</th>
    <td>quantity</td>
    <td>id</td>
  </tr>

  </thead>
  <tbody>
  <tr>
    <th scope="col">${product.prod_name}</th>
    <th scope="col">${product.quantity}</th>
    <th scope="col">${product.id}</th>

  </tr>
    </tbody>
    </table>
    </div>
    `)

    // append bookHTML to content
    // <table style="border">
    // <tr>
    // <h4>Products: ${product.prod_name}</h4>
    // <p>Quantity: ${product.quantity}
    // ID: ${product.id}</p>
    // </tr>
    // </table>
    // <br />
    $('#content').append(productHTML)
  })
}

const onShowFailure = function (error) {
  $('#display-message').text('Please try again')
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}
const onDeleteProduct = function (response) {
  console.log('Async: inside .then')
  console.log(response)
  // empty content elemen
  $('#content').html('')
  $('#content').html(`<h4>Product was deleted check to see if it is deleted</h4>`)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  onCreateSuccess,
  onCreateFailure,
  onUpdateProduct,
  onUpdateFailure,
  onShowProduct,
  onShowFailure,
  onDeleteProduct

}
