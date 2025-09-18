//rewriting our server using express. 

const express = require('express');

let app = express();

//database
const mongoose = require("mongoose");
//connect to remote db
mongoose.connect("mongodb+srv://arnoldfromancius_db_user:%23siliconwhisperer2799@mighkacarepluscluster.a5owpj6.mongodb.net/?retryWrites=true&w=majority&appName=MighkaCareplusCluster")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

//create a user schema
const userSchema = new Schema({
	name: String,
	address: String,
	phone: String,
	email: String
})

//create a user model
const User = model('User', userSchema);


//ROUTING
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
