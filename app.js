const pg = require('pg');
const express = require('express');
const db = require(__dirname + '/server/models/db.js');

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
        }).then( (user) =>{
            request.session.user = user;
            response.redirect('signup')
        })
    })
})

// Login
app.get('/', (request, response) => {
    response.redirect('/login');
});

app.get('/login', (request, response) => {
    response.render('login', {
        user: request.session.user
    });
});

app.get('/login', (request, response) => {
    response.render('login', {
        message: request.query.message,
        user: request.session.user
    });
});

// Login Input
app.post('/login', (request, response) => {
    if(request.body.email.length === 0) {
        response.render('login', {
        message1: "Please fill out your email address."
    });
        return;

    } else if
    (request.body.password.length === 0) {
        response.render('login', {
        message2: "Please fill out your email password."
    });
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
    user = request.session.user;
    if (user === undefined) {
        response.redirect('/login?message=' + encodeURIComponent ("Please log in to view your profile"));
    } else {
        response.render('profile', {
            user: user
        });
    }     
});

// Goals
app.get('/goals', (request, response) => {
    user = request.session.user
    if (user === undefined) {
        response.redirect('/login')
    }
    else {
        response.render('goals')
    }
});



//GET ACTIVITIES

app.get('/work', function (request, response) {
    const user = request.session.user
     if(user)
        db.Activity.findOne({where: {cat: 2}}
        ).then( activity => {
            console.log(activity)
            response.render('hobby', {activity: activity})
        })
        
    else {
        response.redirect('/login')
    }

});


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  REDIRECTED TO HOBBY FOR DEV PURPOSES!!!!!!!!!!
app.get('/hobby', function (request, response) {
    const user = request.session.user
    if(user)
        db.Activity.findAll({where: {cat: 2}}
        ).then( activities => {
            console.log(activities)
            response.render('hobby', {activities: activities})
        })
        
    else {
        response.redirect('/hobby')
        console.log('No session dickhead')
    }

});

app.get('/sport', function (request, response) {
     const user = request.session.user
    if(!user)
        db.Activity.findOne({where: {cat: 3}}
        ).then( activity => {
            console.log(activity)
            response.render('sport', {activity: activity})
        })
        
    else {
        response.redirect('/login')
    }

});

app.get('/travel', function (request, response) {
     const user = request.session.user
    if(!user)
        db.Activity.findOne({where: {cat: 4}}
        ).then( activity => {
            console.log(activity)
            response.render('travel', {activity: activity})
        })
        
    else {
        response.redirect('/login')
    }

});

//ACTIVITIES  || CAT 1 = WORK, CAT 2 = HOBBY, CAT 3 = SPORT, CAT 4 = TRAVEL
app.post('/work', function (request, response) {
    if(request.session.user == undefined) {
        db.Activity.create({
            name : request.body.work,
            cat: 1,
            userId: request.session.user.id,
        })
    } else {
        response.redirect('/login')
    }
});


//op t momeent clickt wordt de naam vd knop mee gegen als data in een post request
//Stuur ook de tijd mee.
//daarna vraag je met die naam de act op. 
//sla vervolgens de tijd op in de tijdtabel.
//

// row aanmoaken wanneer op button click. 
// 2 ; om de minuut een update

app.post('/hobby', function (request, response) {
    var user = request.session.user
    if(user) {
        db.Activity.create({
            name : request.body.hobby,
            cat: 2,
            userId: request.session.user.id,
        })
        console.log('ccreated new activity')
    } else {
        response.redirect('/hobby')
        console.log('//////////////////////////////////')
        console.log('no session dickheads')
    }

});


app.post('/sport', function (request, response) {
    if(request.session.user !== undefined) {
        db.Activity.create({
            name : request.body.sport,
            cat: 3,
            userId: request.session.user.id,
        })
    } else {
        response.redirect('/login')
    }
});

app.post('/travel', function (request, response) {
    if(request.session.user !== undefined) {
        db.Activity.create({
            name : request.body.travel,
            cat: 4,
            userId: request.session.user.id,
        })
    } else {
        response.redirect('/login')
    }
});

app.post('/hobbyGoal', function(request, response){
    //uitdaging zorg dat de ajax request wordt gelogd

    // for(let i = 0; i < request.body.timers.length; i++){
    //     db.Activity.findOne({name: request.body.timers[i].activityName}, {
    //         include: [db.TimeActual]
    //     })
    //     .then((activity) => {
    //         console.log('activity')
    //         console.log(activity)

    //         //als activity nog timeactual heeft creer er 1
    //         if(activity.timeActual !== null || activity.timeActual !== undefined){
    //             db.TimeActual.create({
    //                 timeMinutes: request.body.timers[i],
    //                 activityId: activity.id
    //             })
    //         }
    //         //anders update het
    //         else {
    //             activity.timeActual.update({
    //                 timeMinutes: request.body.timers[i]
    //             })
    //         }
    //     })
    // }
})

// Make connection with the server
app.listen(3000,() => {
    console.log('Server hast started on port 3000')
});