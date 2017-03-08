const pg = require('pg');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');

// Set up the express app
const app = express();

// Log requests
app.use(logger('dev')); // anytime we get a request from the client -> log it to the console

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/static', express.static('static')) // loads static files

app.set('views', __dirname + '/views'); 
app.set('view engine', 'pug');

// Make connection with the server
app.listen(3000,() => {
    console.log('Server hast started on port 3000')
});