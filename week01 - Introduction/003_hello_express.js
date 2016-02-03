const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// handle base route
app.get('/', (req, res) => {
	res.send("Hello Express");
})

// handle any other request
app.use((req, res) => {
	res.status(404).send('404 - Nothing to be seen here');
});

// start the server
const server = app.listen(port, () => {
	console.log(`serving at http://localhost:${server.address().port}`);	
});

