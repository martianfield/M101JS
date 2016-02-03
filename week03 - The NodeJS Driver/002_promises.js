const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/test')
	.then((db) => {
		console.log("successfully connected")
		db.close();
	})
	.catch((err) => {
		console.error("ERROR:", err.message)
	})