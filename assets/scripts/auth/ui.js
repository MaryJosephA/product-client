const store = require('../store.js')
// const Events = require('../auth/events.js')
// const app = require('assets/scripts/app.js')
const signUpSuccess = function () {
  $('#display-message').html('sign-up-success')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}
const signUpFailure = function () {
  $('#display-message').html('sign up failed')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').hide()
  $('#sign-up-form').trigger('reset')
}
const signInSuccess = function (response) {
  $('#display-message').html('welcome' + ' ' + response.user.email)
  $('#new-game').show()
  $('#sign-out-button').show()
  $('#view-game').show()
  $('#change-password').show()
  // $('#main').hide()
  // $('span').html('play')
  // $('#box1').html('').removeClass('win')
  // $('#box2').html('').removeClass('win')
  // $('#box3').html('').removeClass('win')
  // $('#box4').html('').removeClass('win')
  // $('#box5').html('').removeClass('win')
  // $('#box6').html('').removeClass('win')
  // $('#box7').html('').removeClass('win')
  // $('#box8').html('').removeClass('win')
  // $('#box9').html('').removeClass('win')
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
const signOutSuccess = function (response) {
  $('#display-message').text('Sign Out successful')
  $('#new-game').hide()
  $('#view-game').hide()
  $('#sign-out-button').hide()
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

  // $('#main').show()
  // $('#turn').html('New Game')
  // $('#game-message').hide()
  // $('#box1').html('').removeClass('win')
  // $('#box2').html('').removeClass('win')
  // $('#box3').html('').removeClass('win')
  // $('#box4').html('').removeClass('win')
  // $('#box5').html('').removeClass('win')
  // $('#box6').html('').removeClass('win')
  // $('#box7').html('').removeClass('win')
  // $('#box8').html('').removeClass('win')
  // $('#box9').html('').removeClass('win')
  // $('#change-password').show()
  // $('#change-password-header').show()
  // $('#game-show').show()
  // $('#box1').click(false)
  $('#main').trigger('reset')
  // $('#display-message').html('New Game successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
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
  console.log(response)
  // empty content elemen
  $('#content').html('')
  const product = response.product
  const productHTML = (`
    <p>ID: ${product.id}</p>
    <h4>prod_name: ${product.prod_name}</h4>
    <p>Quantity: ${product.quantity}</p>
    <br />
    `)
  $('#display-message').text('Updated')
  $('#update-product').trigger('reset')
  // append bookHTML to content
  $('#content').append(productHTML)
}

const onUpdateFailure = function (error) {
  $('#display-message').text('Error on updating product')
  $('#display-message').removeClass()
  $('#display-message').addClass('failure')
  console.error('onUpdateFailure ran. Error is :', error)
}
const onShowProduct = function (response) {
  console.log('Async: inside .then')
  console.log(response)
  // empty content elemen
  $('#content').html('')

  // loop through API response data
  response.products.forEach(product => {
    // build HTML element with data
    const productHTML = (`

    <h4>Products: ${product.prod_name}</h4>
    <p>Quantity: ${product.quantity}</p>
    <p>ID: ${product.id}</p>
    <br />
    `)

    // append bookHTML to content
    $('#content').append(productHTML)
  })
}

// const onShowProduct = function (prodData) {
//   $ products.each('#display-message').html(prodData.products)

// $('#display-message').text(`Total games played is ${gameData.games.length}`)
// $('#display-message').html('Total games played' + ' ' + gameData.games.length)
// $('#display-message').css('color', 'green')
// console.log('onStatSuccess ran. Data is :', data.games.length)
// }

const onShowFailure = function (error) {
  $('#display-message').text('Please try again')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
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
  onShowFailure

}
