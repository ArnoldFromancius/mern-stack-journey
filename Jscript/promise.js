//Promises are a placeholder for a value that will be available later
//in asynchronous operations.Promise has 3 states; pending, fulfilled, rejected.
//It is used to counter the callback triangle of doom(look it up).

let prm = new Promise(function executor(resolve, reject){
	console.log("inside executor function.");
	//task to solve 
	let WHS;
	setTimeout(() => {
			
		if(WHS){
			console.log("World hunger solved.");
			resolve();
		}else{
			console.log("World hunger not solved.");
			reject();
		}
	}, 0);
}
);

prm
.then(() => {console.log("Success");})
.catch(() => {console.log("Failure");});


