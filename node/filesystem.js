//manipulating files on the computer; we use the 'fs' module

const fs = require('fs');

//writing to files
fs.writeFile('./samplefile.txt', 'Written to file from js...', () => {
	console.log("file written");
});

//reading files
fs.readFile('./samplefile.txt', (err, data) => {
	if(err){
		console.log(err);
	}
	console.log(data.toString());
});

