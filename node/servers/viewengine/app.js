//rewriting our server using express. 

const express = require('express');

let app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/info', (req,res) => {
	res.render('info');
});

app.use((req, res) => {
	res.render('404');
});

app.listen(2000);
