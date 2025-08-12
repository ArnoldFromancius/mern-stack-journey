//manipulating files on the computer; we use the 'fs' module

const fs = require('fs');

//reading files
fs.readFile('./samplefile.txt', (err, data) => {
	if(err){
		console.log(err);
	}
	console.log(data);
});

//writing files
