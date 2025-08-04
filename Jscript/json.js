//Json files basically, a file containing a jscript object.
//2 things to know, a json file a a string version of a js object
//and two methods are primarily used when dealing with json;
//stingify() and parse().

//Our below example is of serialization using json to exchange info
//between two seperate programs

//lets create an object
let jsObject = {
	"name" : "Frost",
	"email" : "arnoldfrost@gmail.com",
	id : 1234567,
	"password" : "password12345"
}
console.log(jsObject);

//now we stringify the object
let jsonObject = JSON.stringify(jsObject);
console.log(jsonObject);

//To convert a JSON into an actual js object we:
let newjsObject = JSON.parse(jsonObject);
console.log(newjsObject);
