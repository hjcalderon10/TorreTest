var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var http = require('http')
var cors = require('cors')
var mongo = require('./functions/mongo')

var index = require('./routes/index')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/', express.static('../frontend/build'))

const staticServer = http.createServer(app)
staticServer.listen(process.env.PORT)

staticServer.on('listening', () => {
  console.log(`server is running on port ${process.env.PORT}`)
  mongo.openMongo()
})
