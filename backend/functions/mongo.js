const mongodb = require('mongodb').MongoClient;
const Mongo = {}
const load = require('./load')
var db
var collection

Mongo.openMongo = () => {
  mongodb.connect(process.env.MONGO, { useNewUrlParser: true }, (err, dbs) =>{
    if(err) { throw err}
    db = dbs.db('torretest')
    collection = db.collection('Bios')
  })
}

Mongo.insertData = (data) => {
  collection.insert(data)
}

module.exports = Mongo