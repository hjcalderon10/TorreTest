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
  const date = `${new Date()}`
  refinedData.profile = rawData
  refinedData.haveAchievements = rawData.achievements.length !== 0
  refinedData.haveAspirations = rawData.aspirations.length !== 0
  refinedData.haveEducation = rawData.education.length !== 0
  refinedData.haveExperiences = rawData.experiences.length !== 0
  refinedData.haveJobs = rawData.jobs.length !== 0
  refinedData.haveStrengths = rawData.strengths.length !== 0
  refinedData.correctAnswers = []
  refinedData.wrongAnswers = []
  refinedData.actualItem = ''
  refinedData.gameRoom = date
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
  data.data.param1 = secondImg
  data.data.param2 = thirdImg
  callback(data)
}

Manager.secondStep = (gameRoom, data, callback) => {
  mongo.retrieveData(gameRoom, (result)=> {
    console.log(result)
    let image = result.profile.person.picture
    let response = {}
    mongoUpdate(image, data, result, gameRoom, 'image')
    response.step = 3
    response.data = {}
    response.data.param1 = getRandomName()
    response.data.param2 = getRandomName()
    callback(response)
  })
}

Manager.thirdStep = (gameRoom, data, callback) => {
  mongo.retrieveData(gameRoom, (result)=> {
    let response = {}
    let name = result.profile.person.name
    mongoUpdate(name, data, result, gameRoom, 'name')
    response.step = 4
    response.data = {}
    response.data.param1 = getRandomHeadline()
    response.data.param2 = getRandomHeadline()
    callback(response)
  })
}

Manager.fourthStep = (gameRoom, data, callback) => {
  mongo.retrieveData(gameRoom, (result)=> {
    let headline = result.profile.person.professionalHeadline
    mongoUpdate(headline, data, result, gameRoom, 'headlin')
    let response = getNextOption(result)
    if(response.type === '') {
      response = finishGame(result)
    }
    callback(response)
  })
}

Manager.fifthStep = (gameRoom, data, type, callback) => {
  mongo.retrieveData(gameRoom, (result)=> {
    let actual = result.profile[type]
    mongoUpdate(actual.length, data, result, gameRoom, type)
    let response = getNextOption(result)
    if(response.type === '') {
      response = finishGame(result)
    }
    callback(response)
  })
}

Manager.nextStep = (gameRoom, stepNumber, data, type, callback) => {
  return steps.manageStep[stepNumber](gameRoom, data, type, callback)
}

steps.manageStep = {
  '1': (gameRoom, data, type, callback) => { Manager.firstStep(gameRoom, callback)},
  '2': (gameRoom, data, type, callback) => { Manager.secondStep(gameRoom, data, callback)},
  '3': (gameRoom, data, type, callback) => { Manager.thirdStep(gameRoom, data, callback)},
  '4': (gameRoom, data, type, callback) => { Manager.fourthStep(gameRoom, data, callback)},
  '5': (gameRoom, data, type, callback) => { Manager.fifthStep(gameRoom, data, type, callback)}
}

finishGame = (result) => {
  response = {}
  response.data.correctAnswers = result.correctAnswers
  response.data.wrongAnswers = result.wrongAnswers
  response.step = -1
  return response
}

getNextOption = (result, lastOption) => {
  let response = {}
  response.data = {}
  response.type = ''
  let label = ''
  response.step = 5
  switch(lastOption){
    case undefined:
      label = 'aspirations'
      if(result.haveAspirations){
        response.type = label
      }
      else{
        response = getNextOption(label)
      }
      break
    case 'aspirations':
      label = 'strengths'
      if(result.haveStrengths){
        response.type = label
      }
      else{
        response = getNextOption(label)
      }
      break
    case 'strengths':
      label = 'achievements'
      if(result.haveAchievements){
        response.type = label
      }
      else{
        response = getNextOption(label)
      }
      break
    case 'achievements':
      label = 'jobs'
      if(result.haveJobs){
        response.type = label
      }
      else{
        response = getNextOption(label)
      }
      break
    case 'jobs':
      label = 'education'
      if(result.haveEducation){
        response.type = label
      }
      break
  }
  if(label !== ''){
    response.data.param1 = getRandomPropertyNumber(label)
    response.data.param2 = getRandomPropertyNumber(label) 
  }
  return response

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

getRandomName = () => {
  let scenario = createScenario()[0]
  let name = scenario.person.name
  if(name){
    return name
  }
  else{
    return getRandomName() 
  }
}

getRandomHeadline = () => {
  let scenario = createScenario()[0]
  let professionalHeadline = scenario.person.professionalHeadline
  if(professionalHeadline){
    return professionalHeadline
  }
  else{
    return getRandomHeadline() 
  }
}

getRandomPropertyNumber = (type) => {
  let scenario = createScenario()[0]
  let answer = scenario[type]
  if(answer.length > 0){
    return answer.length
  }
  else{
    return getRandomPropertyNumber(type)
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

mongoUpdate = (element, data, result, gameRoom, type) =>{
  if(element === data){
    result.correctAnswers.push(`${type}:${element}`)
  }
  else{
    result.wrongAnswers.push(`${type}$${data}`)
  }
  mongo.updateData(gameRoom, result)
}

module.exports = Manager