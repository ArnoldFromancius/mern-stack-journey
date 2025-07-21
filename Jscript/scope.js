//demonstration that a func can be created inside another func, and scope

let globalVar = 'This is a global variable';

function OuterFunction(){
	let outerVar = 'This is a variable in the outer function';
	
	function InnerFunction(){
		let innerVar = 'This is a viriable in the inner function';
		//showing that i can access all the parent variables from 
		//an inner function but not the other way around
		console.log(innerVar);
		console.log(outerVar);
		console.log(globalVar);
	}

	//console.log(outterVar);
}

OuterFunction();
