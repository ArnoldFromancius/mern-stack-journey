//Shallow vs Deep copying of arrays 

//	-Shallow copy-
//There are two main ways to do a shallow copy of an array: using the slice
//method and using the spread(...) operator
//Spread operator:
let shallow_arr = [1,2,3,4];
//using the spread operator (...)
let spread_arr = [...shallow_arr]; 

//Slice method
let slice_arr = shallow_arr.slice();

//	-Deep copy-
//A deep copy does'nt just copy references, it copies the objects themselves 
//and the easiest way to do it is using the structuredClone() function
//assume a nested array
let nest_arr = [
	[1,2,3],
	[3,2,1],
}
//if any of the shallow copy functions was used, a new array would be returned
//with references to this arrays child items
//	-StructuredClone-

let struct_arr = structuredClone(shallow_arr); //creates new objects not refs
nest_arr[0][0] = 99; //only affects this array
//console.log(struct_arr); //unaffected as it is a different entity


//	-Multi-Dimensional Arrays
//Arrays function just like in any other language(from a C perspective) the
//only difference is with multidimensional arrays where JS treats them as arrays
//of arrays and as objects, unlike in C where they are treated as low level 
//memory blocks with pointers.

console.log("2D array");
//2-D array
let nd_arr = [
	[2,4,6],
	[1,3,5],
	[2,4,9]
]

//accessing the array
let i;
let j;

for(i=0; i<nd_arr.length; i++){
	for(j=0; j<nd_arr[i].length; j++){
		console.log(nd_arr[i][j]);
	}
	console.log('|');
}
console.log("3D array!");
//3-D array
let rd_arr = [
	[
		[9,8,7],
		[6,5,4],
		[3,2,1]
	],
	[
		[0,1,0],
		[5,9,5],
		[4,8,4],
	]
]

//accessing the array

let x;
let y;
let z;

for(x=0; x<rd_arr.length; x++){
	for(y=0; y<rd_arr[x].length; y++){
		for(z=0; z<rd_arr[x][y].length; z++){
			console.log(rd_arr[x][y][z]);
		}
		console.log('-');
	}
	console.log('*');
}


//This can go on to nth-D array...
