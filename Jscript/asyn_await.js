//Asyn and await are an improvement(additional feature) to promises that aid in
//code readablity etc.

//this part is standard promise creation the only difference is when calling

function func(){
	return new Promise(function executor(resolve, reject){
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

//here is where the difference lies. Regular promises operate like:

//prm
//.then(() => {console.log("Success");})
//.catch(() => {console.log("Failure");});

//Now we use async_await 
async function run()
{
	await func();
	console.log("Promised fulfilled");
}

run();
