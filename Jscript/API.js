//Working with APIs, what we need to know; -fetch() is used to access an API
//We'll use the catfacts.ninja website to demonstrate this, the website provides
//an API which returns a .json of a random cat fact(or list of facts)

//fetch() returns a promise
fetch('https://catfact.ninja/fact')
.then((res) => res.text())
.then(txt => console.log(txt))
.catch(() => console.log('Error!'));
