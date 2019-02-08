const load = require('./load')
const Manager = {}
var initialState

Manager.createGame = () => {
  const search = String.fromCharCode(createRandomNumber(25, 65))
  console.log(search)
  load.startGame(search, results => {
    console.log(results)
    initialState = results
  })
}

Manager.getGame = (callback) => {
  callback(createScenario())
}

createRandomNumber = (max, offset) => {
  return Math.floor(Math.random() * max) + offset
}

createScenario = () => {
  console.log(typeof Object.keys(initialState).length)
  const index = createRandomNumber(Object.keys(initialState).length, 0)
  console.log(index)
  return initialState.splice(index, 1)
}

module.exports = Manager