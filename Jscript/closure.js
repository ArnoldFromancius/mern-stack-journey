//closure; basically when a nested function still has access to the variables of
//its parent function even after the parent function is closed. The child 
//function is said to have closure on the data

function OuterFunction(){
	let outerVar = 10;

	function InnerFunction(){
		console.log(outerVar);
	}

	return InnerFunction;
}

let temp = OuterFunction();
//OuterFunction returns InnerFunction which happens to be in OuterFunction's 
//scope, but due to closure, a lexical scope(copy of the OuterFunctions' data)
//is preserved with InnerFunction now in temp.

temp();
