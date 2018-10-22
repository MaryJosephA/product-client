'use strict'
const config = require('../config.js')
const store = require('../store.js')
// const board = require('./../../../lib/board.js')
// const gameData = require('./auth/Games/board.js')
// Users/maryabraham/wdi/projects/Tic-Tac-Toe-client/assets/scripts/auth/Games

const signUp = function (proddata) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: proddata
  })
}
const signIn = function (proddata) {
  // const gameId = gameData.games.id
  // const email = gameData.games.email
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: proddata
  })
}
const changePassword = function (proddata) {
  console.log('change password ', proddata)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
      // Authorization: 'Token token=' + store.user.token
    },
    data: proddata
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
      // Authorization: 'Token token=' + store.user.token
    }
  })
}
const create = function (proddata) {
  // console.log('data: ', gameData)
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },

    data: proddata
  })
}
const showProduct = function (prodData) { /// ///////////////////////////////////////////////////////
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: prodData

  })
}
// const show = function (proddata) {
//   // console.log('data: ', gameData)
//   return $.ajax({
//     url: config.apiUrl + '/products',
//     method: 'POST',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//
//     data: proddata
//   })
// }

const updateProduct = function (prodData) {
  console.log(prodData.product.Id)
  return $.ajax({

    // url: config.apiUrl + `/products/${prodData.product.Id}`,
    url: config.apiUrl + '/products/' + prodData.product.id,
    // url: config.apiUrl + '/products/' + productId,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: prodData
  })
}
const deleteProduct = function (prodData) {
  return $.ajax({
    url: config.apiUrl + '/products/' + prodData.product.id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
      // Authorization: 'Token token=' + store.user.token
    }
  })
}

//       'game': {
//         'cell': {
//           'index': event.target.data,
//           'value': $(event.target).this.innerHTML
//         },
//         'over': store.gameover
//       }
//     }
//   })
// }

//     gameData
//     // data: data
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  updateProduct,
  create,
  showProduct,
  deleteProduct
}
