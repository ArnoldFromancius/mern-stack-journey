//We create a basic server

let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
	console.log('request received!');
	let path = './views/';
	switch(req.url){
		case '/':
			path += 'index.html';
			res.StatusCode = 200;
			break;
		case '/info':
			path += 'info.html';
			res.StatusCode = 200;
			break;
		default: path += 'missing.html';
			res.StatusCode = 404;
			break;
	}

	fs.readFile(path, (err, data) => {
		if(err){
			console.log(err);
		}
		res.setHeader('Content-Type','text/html');
		res.write(data);
		res.end();
		
	});
});

server.listen(1000, 'localhost', () => {
	console.log('listening on port 1000...');
});
