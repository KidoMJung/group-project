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

app.set('views', __dirname + '/server/views'); 
app.set('view engine', 'pug');

// Signup
app.get('/signup', (request, response) => {
    response.render('signup')
});

// Signup Input
app.post('/signup', (request, response) => {
    bcrypt.hash(request.body.password, 8, function(err, hash) {
        if (err) { console.log(err) }
        let newUser = db.User.create({
            name: request.body.name,
            email:  request.body.email,
            password: hash
        }).then( f =>{
            response.redirect('/signup')
        })
    })
})

// Login
app.get('/', function (request, response) {
    response.redirect('/login');
});

app.get('/login', (request, response) => {
    console.log('werk login.pug?')
    response.render('login')
});

// app.get('/login', (request, response) => {
//     response.render('login', {
//         user: request.session.user
//     });
// });

// Make connection with the server
app.listen(3000,() => {
    console.log('Server hast started on port 3000')
});