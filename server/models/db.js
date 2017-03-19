
const Sequelize = require('sequelize');
const db = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost/group_project`);


 


//CREATE USER
db.User = db.define('user', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
});

db.Activity = db.define('activities', {
	name : Sequelize.STRING,
	cat : Sequelize.INTEGER,
});

db.TimeActual = db.define('timeActual', {
	timeMinutes: Sequelize.STRING,
});

db.Goals = db.define('goals', {
	name : Sequelize.STRING,
});

db.Calender = db.define('weekNumber', {
	WeekNumber : Sequelize.INTEGER,
});

//RELATIONS
db.User.hasMany(db.Activity);
db.Activity.belongsTo(db.User)

db.Activity.hasOne(db.TimeActual);
db.TimeActual.belongsTo(db.Activity);

db.Activity.hasOne(db.Goals);
db.Goals.belongsTo(db.Activity);

db.TimeActual.hasOne(db.Calender);
db.Calender.belongsTo(db.TimeActual);

db.Goals.hasOne(db.Calender);
db.Calender.belongsTo(db.Goals);


db.sync(
    {force: true}
)
    .then(function(db) {
        const user1 = {
            name: 'klaas',
            email: 'klaas@gmail.com',
            password: 'klaas123'
        }
        db.User.create(user1)
    })
    .then(function(user1) {
        const activity1 = {
            name: 'Cooking',
            cat: 2,

        }
        db.Activity.create(activity1)

        const activity2 = {
            name: 'Baking',
            cat: 2,

        }
        db.Activity.create(activity2)
    })
    .catch( (error) => console.log(error));


module.exports = db;