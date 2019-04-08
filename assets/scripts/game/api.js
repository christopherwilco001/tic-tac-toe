const config = require('../config')
const store = require('../store')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const getGames = function () {
//   return $.ajax({
//     url: config.apiUrl + '/games?over=true',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const updateGame = function (index, value, boolean) {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + store.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//       game: {
//         cell: {
//           index: index,
//           value: value
//         },
//         over: boolean
//       }
//     }
//   })
// }

module.exports = {
  newGame
  // getGames,
  // updateGame
}
