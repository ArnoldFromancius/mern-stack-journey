//We create a basic server

let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
	console.log('request received!');
	fs.readFile('./views/index.html', (err, data) => {
		if(err){
			console.log(err);
		}
		res.setHeader('Content-Type','text/plain');
		res.write(data);
		res.end();
	});
});

server.listen(1000, 'localhost', () => {
	console.log('listening on port 1000...');
});
