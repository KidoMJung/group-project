const pg = require('pg');
const express = require('express');
const db = require(__dirname + '/server/models/username.js');
const dbA = require(__dirname + '/server/models/activiy.js');

const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');

// Set up the express app
const app = express();

// Log requests
app.use(logger('dev')); // anytime we get a request from the client -> log it to the console

// Parse incoming requests data
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/static', express.static('static')) // loads static files

app.use(session({
    secret: "very very very tight security", // your settings on how sessions be configure
    resave: true,
    saveUnitialized: false
}));

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
            email: request.body.email,
            password: hash
        }).then( f =>{
            response.redirect('signup')
        })
    })
})

// Login
app.get('/', function (request, response) {
    response.redirect('/login');
});

app.get('/login', (request, response) => {
    response.render('login', {
        user: request.session.user
    });
});

app.get('/login', (request, response) => {
    console.log('werkt app.get login.pug?')
    response.render('login', {
        message: request.query.message,
        user: request.session.user
    });
});

// Login Input
app.post('/login', (request, response) => {
    if(request.body.email.length === 0) {
        response.redirect('/login?message=' + encodeURIComponent("Please fill out your email address."));
        return;
    }
    if(request.body.password.length === 0) {
		response.redirect('/login?message=' + encodeURIComponent("Please fill out your password."));
		return;
	}
	db.User.findOne({
		where: {
			email: request.body.email 
		}
	}).then(function (user) {
		if (user) {
             bcrypt.compare(request.body.password, user.password, (err, result) => {
                 if(result === true){
                    request.session.user = user;
			        response.redirect('profile');
                  }
             });
		} else {
			response.redirect('/login?message=' + encodeURIComponent("Invalid email or password."));
		}
	}, function (error) {
		response.redirect('/login?message=' + encodeURIComponent("Invalid email or password."));
	});
});

// Profile
app.get('/profile', function (request, response) {
    const user = request.session.user;
    if (user === undefined) {
        repsonse.redirect('/profile?message=' + encodeURIComponent ("Please log in to view your profile"));
    } else {
        response.render('profile', {
            user: user
        });
    }     
});

//ACTIVITIES  || CAT 1 = WORK, CAT 2 = HOBBY, CAT 3 = SPORT, CAT 4 = TRAVEL

app.post('/work', function (request, response) {
    if(request.session.user !== undefined) {
        db.Activiy.create({
            name : req.body.work,
            cat: 1,
        })
    }else{
        res.redirect('/login')
    }
});

app.post('/hobby', function (request, response) {
    if(request.session.user !== undefined) {
        db.Activiy.create({
            name : req.body.hobby,
            cat: 2,
        })
    }else{
        res.redirect('/login')
    }
});

app.post('/sport', function (request, response) {
    if(request.session.user !== undefined) {
        db.Activiy.create({
            name : req.body.sport,
            cat: 3,
        })
    }else{
        res.redirect('/login')
    }
});

app.post('/travel', function (request, response) {
    if(request.session.user !== undefined) {
        db.Activiy.create({
            name : req.body.travel,
            cat: 4,
        })
    }else{
        res.redirect('/login')
    }
});

// Make connection with the server
app.listen(3000,() => {
    console.log('Server hast started on port 3000')
});