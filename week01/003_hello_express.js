const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
	res.send("Hello Express");
})

app.listen(port);
console.log(`serving at http://localhost:${port}`);
