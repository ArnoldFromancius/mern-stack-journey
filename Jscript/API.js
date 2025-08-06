//Working with APIs, what we need to know; *fetch() is used to access an API
//We'll use the catfacts.ninja website to demonstrate this, the website provides
//an API which returns a .json of a random cat fact(or list of facts)


//THIS SOLUTION UTILIZES PROMISE CHAINING
//fetch() returns a promise
//fetch('https://catfact.ninja/fact')	//json is returned in raw format
//.then((res) => res.text())	//we convert the json to readable text
//.then(txt => console.log(txt))	//self explainatory
//.catch(() => console.log('Error!'));	//error handling

//THIS SOLUTION UTILIZES ASYNC-AWAIT
async function catFact(){
	let raw_fact = await fetch('https://catfact.ninja/fact');
	let json_fact = await raw_fact.json();
	console.log(json_fact);
}
catFact();
//as you can see, this solution is much more elegant and clearly illustrates
//the use of async_await.
