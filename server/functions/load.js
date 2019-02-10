const axios = require('axios')
const Load = {}
const server = process.env.SERVER

Load.startGame = (search, callback) => {
  axios.get(`${server}/people?${search}`)
    .then(list => {
      const promises = list.data.map(element => helper(element))
      Promise.all(promises)
        .then(results => {
          callback(results)
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

helper = (element) => {
  return new Promise((resolve, reject) =>{
    axios.get(`${server}/bios/${element.publicId}`)
      .then(response => {
        let data = response.data
        resolve(data)
      })
      .catch(err => reject(err))
  })
}


module.exports = Load