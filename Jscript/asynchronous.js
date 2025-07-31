
//JS as a language does not support multi-threads. For assynchronous opperations
//APIs are used(sort of like how pthreads can be used in linux, but with node 
//or the browser in place of the OS(linux).

function func1(){
	console.log("FN1 started");
	console.log("FN1 finished");
}

function func2(){
	console.log("FN2 started");
	let start = Date.now();
	let delay = 3000;
	let end = start + delay;
	let tmp=139456;

	while(Date.now() != end){
		console.log("FN2 executing...", tmp--);
	}
	console.log("FN2 finished");

}

function func3(){
	console.log("FN3 started");
	let start = Date.now();
	let delay = 3000;
	let end = start + delay;
	let tmp=139456;

	while(Date.now() != end){
		console.log("FN3 executing...", tmp--);
	}
	console.log("FN3 finished");
}

function func4(){
	console.log("FN4 started");
	console.log("FN4 finished");
}

//so we want func1 and func3 to run sequentially as they are lightweight. 
//func2 has some waiting to do, so we will use an event loop, but first below
//is what synchronous execution would look like.
//func1();
//func2();
//func3();

//proper asynchronous version using event loop:
func1();
setTimeout(func2, 5000);
setTimeout(func3,2000);
func3();
//here func1 then func2 run sequentially, then after 2000millisec func3 is added to call stack then func2
//after 5000millisecs... so just because func2 appears first in the called, does'nt mean it execs earlier
//than func3
