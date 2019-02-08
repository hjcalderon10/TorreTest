var express = require('express');
var router = express.Router();
var load = require('../functions/load')

/* GET home page. */
router.get('/', (req, res) => {
  //load.load()
  res.render('index', { title: 'Express' });
});

module.exports = router;
