//rewriting our server using express. 

const express = require('express');

let app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
	res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/info', (req,res) => {
	res.sendFile('./views/info.html', {root: __dirname });
});

app.use((req, res) => {
	res.sendFile('./views/missing.html', {root: __dirname });
});

app.listen(2000);
