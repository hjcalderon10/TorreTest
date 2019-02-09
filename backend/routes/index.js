var express = require('express')
var router = express.Router()
var Manager = require('../functions/manager')

/* GET home page. */
router.get('/', (req, res) => {
  Manager.getGame(results => {
    res.json({ data: results })
  })
})

router.post('/', (req, res) => {
  console.log(req.headers.gameroom)
  Manager.nextStep(req.headers.gameroom, req.body.stepnumber, req.body.data, (data) => {
    res.json({ data: data })
  })
})

module.exports = router
