//function declaration
function reg_func(){
	console.log("This is a regular function");
}

//arrow function syntax
let arrow = () => {
	console.log("This is an arrow function");
}

//arrow func are usaually 1 liners, return is omitted
let arrow_oneliner = () => console.log("This is one line arrow function");

//function expression syntax
let expr = function(){
	console.log("This is a function expression");
}

//imediately invoked funtion syntax
(function(){
	console.log("This is an imediately invoked function");
})();

reg_func();
arrow();
arrow_oneliner();
expr();
