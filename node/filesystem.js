//manipulating files on the computer; we use the 'fs' module

const fs = require('fs');

//creating a directory
fs.mkdir('./files', (err) => {
	if(err){
		console.log('error creating folder: ');
		//console.log(err);
		return;
	}
	console.log('folder created');
});

//writing to files
fs.writeFile('./files/samplefile.txt', 'Written to file from js...', () => {
	console.log("file written");
});

//reading files
fs.readFile('./files/samplefile.txt', (err, data) => {
	if(err){
		console.log('error reading file');
		//console.log(err);
		return;
	}
	console.log(data.toString());
});

//deleting files
//fs.rm();

//deleting folders
//fs.rmdir();
