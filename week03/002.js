const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/crunchbase', (err, db) => {
    if(err) {
        console.error("ERROR:", err.message)
    }
    else {
        console.log("Successfully connected to database")
        db.close()
    }
})