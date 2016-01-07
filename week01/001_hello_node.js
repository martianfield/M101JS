const http = require('http');
const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
	res.writeHead(200, {"Content-Type":"text/plain"})
	res.end("Hello Node");
})

server.listen(port);

console.log(`serving at http://localhost:${port}`);


