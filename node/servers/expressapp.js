const express = require('express');

let app = express();

app.listen(2000);

app.get('/', (req, res) => {
	res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/info', (req,res) => {
	res.sendFile('./views/info.html', {root: __dirname });
});

