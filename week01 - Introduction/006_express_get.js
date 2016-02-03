'use strict';

const express = require('express');
const engines = require('consolidate');
const app = express();


// register nunjucks as the engine for .html files
app.engine('html', engines.nunjucks);
// set the default engine extension to use
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
	res.send("Hello there");
});

app.get('/:thingy', (req, res) => {
	console.dir(req.params);
	console.dir(req.query);
	let queries = [];
	for(let q in req.query) {
		if(req.query.hasOwnProperty(q)) {
			queries.push({name:q, value:req.query[q]})
		}
	}
	console.dir(queries);
	res.render(
		'006_express_get', 
		{
			thingy:req.params.thingy, 
			queries:queries
		})
	//res.send("alright");
});

var server = app.listen((process.env.PORT || 8080), () => {
	console.log(`serving at http://localhost:${server.address().port}`);
})