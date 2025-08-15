//We create a basic server

let http = require('http');

let server = http.createServer((req, res) => {
	console.log('request received!');
	console.log(req);
});

server.listen(1000, 'localhost', () => {
	console.log('listening on port 1000...');
});
