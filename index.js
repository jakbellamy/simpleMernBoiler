//dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//refs
const router = require('./src/routes/routes.js');

//node init and cors setup
const app = express().use(cors());
const PORT = 8080;

//DB CONNECTION init
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/yourDbNameHere', {useNewUrlParser: true,  useUnifiedTopology: true}); //change route to reflect your db

//bodyParser init
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//connect router to 'App'
router(app);

//test serve @ root ('/')
app.get('/', (req, res) => {
  res.send(`Node and Express are running on port: ${PORT}`);
  console.log('server hit at root')
});

//listen @ PORT
app.listen (PORT, () => {
  console.log(`Your server is running at port: ${PORT}`);
});
