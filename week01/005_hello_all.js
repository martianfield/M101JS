const express = require('express');
const engines = require('consolidate');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = process.env.PORT || 8080;
const uri = 'mongodb://localhost:27017/moviedb';

// set up express
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// connect to the database
MongoClient.connect(uri, (err, db) => {
	// main route
	app.get('/', (req, res) => {
		res.render('index', {"name":"Mongo Movie DB"})
	});

	// set up movies route
	app.get('/movies', (req, res) => {
		db.collection('movies').find({}).toArray((err, docs) => {
			res.render('movies', {"movies": docs});	
			//db.close();
		});
	})

	// start serving
	const server = app.listen(port, () => {
		console.log(`serving at http://localhost:${port}`);
	})
});


