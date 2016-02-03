'use strict'

const MongoClient = require('mongodb').MongoClient
let connected_db;

MongoClient.connect('mongodb://localhost:27017/test')
	.then((db) => {
		connected_db = db
		let cats = db.collection('cats')
		return cats.insertMany([
			{'name': 'Purrloin'},
			{'name': 'Cinder'}
		])
	}) 
	.then((r) => {
		delete r.connction // just to make the print-out prettier
		console.log(r)
		connected_db.close
	})
	.catch((err) => {
		console.error("ERROR:", err)
	})