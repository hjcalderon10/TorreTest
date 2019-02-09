const load = require('./load')
const mongo = require('./mongo')
const Manager = {}
const steps = {}
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
  sendData.step = 1
  sendData.data = rawData
  sendData.gameRoom = refinedData.gameRoom
  callback(sendData)
  mongo.insertData(refinedData)
}

Manager.firstStep = (gameRoom, callback) => {
  let data = {}
  let secondImg = getRandomImg()
  let thirdImg = getRandomImg()
  data.step = 2
  data.data = {}
  data.data.secondImg = secondImg
  data.data.thirdImg = thirdImg
  callback(data)
}

Manager.nextStep = (gameRoom, stepNumber, callback) => {
  return steps.manageStep[stepNumber](gameRoom, callback)
}

steps.manageStep = {
  '1': (gameRoom, callback) => { Manager.firstStep(gameRoom, callback)},
  '2': (gameRoom, callback) => { Manager.secondStep(gameRoom, callback)}
}

getRandomImg = () => {
  let scenario = createScenario()[0]
  let img = scenario.person.picture
  if(img){
    return img
  }
  else{
    return getRandomImg() 
  }
}

createRandomNumber = (max, offset) => {
  return Math.floor(Math.random() * max) + offset
}

createScenario = () => {
  const index = createRandomNumber(Object.keys(initialState).length, 0)
  console.log(index)
  return initialState.slice(index, index+1)
}

module.exports = Manager