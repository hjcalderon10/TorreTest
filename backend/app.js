var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var http = require('http')
var cors = require('cors')
const Manager = require('./functions/manager')

var index = require('./routes/index')

var app = express()

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', express.static('../frontend/build'))

app.use('/api/', index)

const staticServer = http.createServer(app)
staticServer.listen(process.env.PORT)

staticServer.on('listening', () => {
  console.log(`server is running on port ${process.env.PORT}`)
  Manager.createGame()
})
