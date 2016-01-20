'use strict'

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/crunchbase', (err, db) => {
	if(err) {
		console.log("ERROR:", err.message)
	}
	else {
		let query = {"category_code":"biotech"}
		// without a callback, the find() method is blocking (synchronous)
		let cursor = db.collection('companies').find(query)
		cursor.forEach(
			(doc) => {
				console.log(doc.name);
			},
			(err) => {
				// called on an error or if the cursor is exhausted
				if(err === null) {
					console.log("DONE: Cursor exhausted")
				}
				else {
					console.error("ERROR:", err.message)	
				}
				db.close()
			}
		)
	}
})