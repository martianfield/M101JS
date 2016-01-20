'use strict'

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/crunchbase', (err, db) => {
	if(err) {
		console.log("ERROR:", err.message)
	}
	else {
		let query = {"category_code":"biotech"}
		db.collection('companies').find(query).toArray((err, docs) => {
			if(err) {
				console.log("ERROR:", err.message)			
			}
			else {
				docs.forEach(function(doc) {
					console.log( doc.name )
				})
				db.close()
			}
		})
	}
})