const store = require('../store.js')
// const authEvents = require('./auth/events.js')

const signUpSuccess = function () {
  $('#display-message').html('Please log in')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').show()
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
  $('#getProductsButton').hide()
  $('#AddProduct').hide()
  $('#update').hide()
  $('#delete').hide()
}
const signUpFailure = function () {
  $('#display-message').html('sign up failed')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').show()
}

const signInSuccess = function (response) {
  $('#display-message').html('welcome' + ' ' + response.user.email + ' ' + response.user.id)
  $('#signout').show()
  // $('#change-password').show()
  $('#changepassword').show()
  $('#getProductsButton').show()
  $('#AddProduct').show()
  $('#update').show()
  $('#delete').show()
  $('#display-message').css('color', 'green')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#sign-out-form').show()
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
  // $('#display-message').fadeOut(2000)
  $('#change-password').hide()
  $('#display-message').css('color', 'green')
  $('#main').hide()
  $('#sign-in-form').show()
  $('#signout').hide()
  $('#signup').show()
  // $('#sign-up-form').show()
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('change-password').trigger('reset')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password').addClass('hidden')
  $('#create-product').hide()
  $('#update-product').hide()
  $('#delete-product').hide()
  $('#changepassword').hide()
  $('#getProductsButton').hide()
  $('#AddProduct').hide()
  $('#update').hide()
  $('#delete').hide()
  $('#content').html('')
}
const signOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').show()
  $('#signout').show()
}
const changePasswordSuccess = function () {
  $('#display-message').text('Success change password')
  $('#display-message').css('color', 'green')
  $('#change-password').trigger('reset')
  $('#change-password').hide()
}
const changePasswordFailure = function () {
  $('#display-message').html('please try again')
  $('#display-message').css('color', 'red')
  $('#change-password').trigger('reset')
  $('#change-password').hide()
}
const onCreateSuccess = function (response) {
  // store.product = response.product
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
  // $('#display-message').text('created')
  $('#update-product').trigger('reset')
  $('#delete-product').hide()

  // append productHTML to content
  $('#content').append(productHTML)
  $('#display-message').text('sucessfully created the data')
  $('#create-product').trigger('reset')
  $('#content').append(response.product)
  // console.log('onCreateSuccess ran. Data is :', data)
}

//
const onCreateFailure = function () {
  $('#display-message').text('Error on creating example')
  $('#display-message').css('color', 'red')
  $('#create-product').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('onCreateFailure ran. Error is :', error)
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
  $('#delete-product').hide()

  // append productHTML to content
  $('#content').append(productHTML)
}
// <p>ID: ${product.id}</p>
// <h4>prod_name: ${product.prod_name}</h4>
// <p>Quantity: ${product.quantity}</p>
// <br />

const onUpdateFailure = function (error) {
  $('#display-message').text('Error on updating product')
  $('#display-message').css('color', 'red')
  $('#update-product').trigger('reset')
  $('#display-message').removeClass()
  $('#display-message').addClass('failure')
  console.error('onUpdateFailure ran. Error is :', error)
}
const onShowProduct = function (response) {
  // store.user = response.user
  // $('#display-message').html('welcome' + ' ' + response.user.email + ' ' + response.user.id)
  // console.log('Async: inside .then')
  // console.log(response)
  // empty content elemen
  // store.user = response.user
  // if (response.products = 0){
  // $('#display-message').html('new user add list')
  // }else{
  $('#content').html('')
  $('#update-product').hide()
  // loop through API response data
  response.products.forEach(product => {
    console.log('this is :', product)
    // build HTML element with data
    //       const myClock = document.getElementById('delete')
    let buttonhtml = ''
    let emailhtml = ''
    if (product.editable === true) {
      buttonhtml = `<button data-id='${product.id}' type="submit" class="delete btn btn-primary navbar-btn">Delete</button>`
      emailhtml = `<p data-user='${store.user.email}'>  ${store.user.email} </p>`
    }
    //  document.getElementById('delete').style.display
    // <button id="delete" type="submit" class="btn btn-primary navbar-btn">Remove List</button>}
    //   $('#delete').show()
    // }
    // <button id="delete" type="submit" class="btn btn-primary navbar-btn">Remove List</button>
    const productHTML = (`

    <div class="table-container">
      <table class="table table-striped">
  <thead>
  <tr>
  <th scope="col">${buttonhtml}</th>
  <th scope="col">${emailhtml}</th>
  </tr>
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
    // onShowProduct.sort()
    // append productHTML to content
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
  $('#display-message').css('color', 'red')
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}
const onDeleteProduct = function (response) {
  $('#display-message').text('deleted successful')
  // console.log('Async: inside .then')
  // console.log(response)
  $('#delete-product').trigger('reset')
  $('#display-message').trigger('reset')
  // empty content elemen
  $('#content').html('')
  $('#display-message').css('color', 'green')
}
const onDeleteFailure = function () {
  $('#change-password').hide()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#content').html('')
  $('#display-message').css('color', 'Red')
  $('#delete-product').trigger('reset')

  // $('#message').removeClass()
  // $('#message').addClass('failure')
  // console.error('onCreateFailure ran. Error is :', error)
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
  onDeleteProduct,
  onDeleteFailure

}
