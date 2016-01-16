'use strict'

const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb://localhost:27017/test'
var connected_db

MongoClient.connect(uri)
	.then((db) => {
		console.log('connected ...')
		connected_db = db
		let col = db.collection('cats')
		return col.insertOne({'name':'Charlie2'})
	}) 
	.then((r) => {
		r.connection = {} // to make the print-out more readable
		console.log('inserted ...')
		console.log(r)

		connected_db.close()
	})
	.catch((err) => {
		console.error('ERROR:', err)
		connected_db.close()
	})