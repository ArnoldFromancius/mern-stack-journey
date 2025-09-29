//streams allow us to use a file before completly downloading/loading it
//the file is transmitted in chuncks into a buffer...

const fs = require('fs');

const readStream = fs.createReadStream('./files/largesample.txt');

readStream.on('data', (chunck) => {
	console.log('--- CHUNCK ---');
	console.log(chunck.toString());
});

