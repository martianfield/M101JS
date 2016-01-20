'use strict'

const MongoClient = require('mongodb').MongoClient
let connectedDb;

MongoClient.connect('mongodb://localhost:27017/crunchbase')
	.then((db) => {
		connectedDb = db
		let query = {"category_code":"biotech"}
		return db.collection('companies').find(query).toArray()
	})
	/*
	.then((cursor) => {
		return cursor.toArray()
	})
	*/
	.then((docs) => {
		docs.forEach(function(doc) {
			console.log( doc.name )
		})
		connectedDb.close()
	})
	.catch((err) => {
		connectedDb.close()
		console.error('ERROR:', err.message)
	})