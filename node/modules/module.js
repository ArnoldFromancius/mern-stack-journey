//This module will be exportable. Basically we have an object 'module' 
//that has a property 'exports'. We can add the items(methods,variables...)
//to this property and access them in other modules(files)

let sampleText = "This is a test module";

let example_module = function () { console.log(sampleText) }

//now to make the method example_module accessible to other modules
module.exports.example_module = example_module;
