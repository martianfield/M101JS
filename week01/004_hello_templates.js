const engines = require('consolidate');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// register nunjucks as the engine for .html files
app.engine('html', engines.nunjucks);
// set the default engine extension to use
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
	res.render('index', {name: 'Amelia Pond'});
})

app.use((req, res) => {
	res.status(404).send("404 - Not Found");
})

const server = app.listen(port, () => {
	console.log(`serving at http://localhost:${server.address().port}`);
})