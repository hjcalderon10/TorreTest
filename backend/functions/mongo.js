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
    Mongo.search('person.name', 'Tania')
  })
  //load.load(callback => Mongo.insert(callback))
}

Mongo.insert = (data) => {
  data.map(element => collection.insert(element))
}

Mongo.search = (pField, pValue) => {
  const field = pField
  const value = { $regex: pValue}
  const query = {}
  query[field] = value

  collection.find(query).toArray((err, result) => {
    console.log(result)
  })
}


module.exports = Mongo