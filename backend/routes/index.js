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
  Manager.nextStep(req.headers.gameRoom, req.body.stepnumber, (data) => {
    res.json({ data: data })
  })
})

module.exports = router
