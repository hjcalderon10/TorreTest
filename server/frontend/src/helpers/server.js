export const Server = {}
const url = 'http://localhost:8080/api'

Server.startGame = () => {
  const params = { method: 'GET', headers: {'Accept': 'application/json'}}
  return new Promise(resolve => {
    Server.sendRequest(params, data => {
      console.log(data)
      localStorage.setItem('gameRoom', data.gameRoom)
      localStorage.setItem('step', data.step)
      resolve(data.data)
    })
  })
}

Server.nextStep = (data, type) => {
  const gameRoom = localStorage.getItem('gameRoom')
  const body = {
    'stepnumber': localStorage.getItem('step'),
    'data': data,
    'type': type
  }
  const params = { method: 'POST', headers: {
    'Accept': 'application/json', 
    'content-type': 'application/json', 
    'gameRoom': gameRoom
  }, body: JSON.stringify(body)}
  return new Promise(resolve => {
    Server.sendRequest(params, data => {
      localStorage.setItem('step', data.step)
      resolve(data)
    })
  })
}

Server.sendRequest = (params, callback) => {
  fetch(`${url}/`, params)
  .then(response => response.json())
  .then(response => {
    const data = response.data
    callback(data)
  })
}