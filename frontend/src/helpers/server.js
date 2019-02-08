export const Server = {}
const url = 'http://localhost:8080/api'

Server.startGame = () => {
  const params = { method: 'GET', headers: {'Accept': 'application/json'}}
  return new Promise(resolve => {
    Server.sendRequest(params, data => {
      console.log(data)
      localStorage.setItem('gameRoom', data.gameRoom)
      resolve(data.data)
    })
  })
}

Server.nexStep = () => {
  const gameRoom = localStorage.getItem('gameRoom')
  const body = {}
  //body algo
  const params = { method: 'POST', headers: {'Accept': 'application/json', 'gameRoom': gameRoom}, body: body}
  return new Promise(resolve => {
    Server.sendRequest(params, data => {
      console.log(data)
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