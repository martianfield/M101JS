
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017/test';
var db = null;

MongoClient.connect(uri)
	.then((connection) => {
		db = connection;
		return db.collection('movies').find({});
	})
	.then((cursor) => {
		return cursor.toArray()
	})
	.then((docs) => {
		docs.forEach((doc) => {
			console.log(doc.title);
		})
		db.close();
	})
	.catch((err) => {
		console.log("Error: ", err.message);
	})