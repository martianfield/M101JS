const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017/test';

// connect to server
MongoClient.connect(uri, (err, db) => {
	// query a collection
	db.collection('movies').find({}).toArray((err, docs) => {
		// display results
		docs.forEach((doc) => {
			console.log(doc.title);
		})
		// close database
		db.close();
	})
})
