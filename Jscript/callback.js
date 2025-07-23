//call back functions: the basic idea is that you can pass a function as an
//argument to a function, the passed function is the callback function and
//the calling function is a higher order function

//callback function option 1
function add(a,b){
	return a+b
}
//callback function option 2
function sub(a,b){
	return a-b
}

//higher order function
function calc(a, b, callback){
	return callback(a,b);
}

console.log(calc(2,6,add));

