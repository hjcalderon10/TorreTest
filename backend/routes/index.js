var express = require('express');
var router = express.Router();
var Manager = require('../functions/manager')

/* GET home page. */
router.get('/', (req, res) => {
  Manager.getGame(results => {
    res.json({ data: results })
  })
});

module.exports = router
