const mongodb = require('mongodb').MongoClient;
const Mongo = {}
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

Mongo.retrieveData = (gameRoom, callback) => {
  //const field = pField
  //const value = { $regex: pValue}
  const query = {'gameRoom': gameRoom}
  console.log(query)
  //query[field] = value

  collection.find(query).toArray((err, result) => {
    callback(result[0])
  })
}

Mongo.updateData = (gameRoom, results) => {
  let criteria = {'gameRoom': gameRoom}
  collection.update(criteria, results, (err, count, status) => console.log(`${err} and ${count} and ${status}`))
}

module.exports = Mongo