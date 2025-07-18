//creating a literal object - syntax
//NB: objects are simply a block of key-value pairs

let obj = {
	//objects have properties and behaviours. lets define some properties
	name : "OBJECT",
	serial : 9001,
	//defining some behaviours(functions)
	//remeber key-value with the value as the function and key as its name
	beep : function(){
		console.log("Object is beeping")
	}
};

//accessing the object
console.log(obj.name);
obj.beep();
