const load = require('./load')
const mongo = require('./mongo')
const Manager = {}
var initialState

Manager.createGame = () => {
  //this let search to be a character between A and Z in ASCII
  const search = String.fromCharCode(createRandomNumber(25, 65))
  console.log(search)
  load.startGame(search, results => {
    console.log(results)
    initialState = results
  })
}

Manager.getGame = (callback) => {
  const rawData = createScenario()[0]
  const sendData = {}
  const refinedData = {}
  console.log(rawData)
  refinedData.profile = rawData
  refinedData.haveAchievements = rawData.achievements.length !== 0
  refinedData.haveAspirations = rawData.aspirations.length !== 0
  refinedData.haveEducation = rawData.education.length !== 0
  refinedData.haveExperiences = rawData.experiences.length !== 0
  refinedData.haveJobs = rawData.jobs.length !== 0
  refinedData.haveStrengths = rawData.strengths.length !== 0
  refinedData.gameRoom = new Date()
  sendData.data = rawData
  sendData.gameRoom = refinedData.gameRoom
  callback(sendData)
  mongo.insertData(refinedData)
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