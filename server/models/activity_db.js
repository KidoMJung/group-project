const Sequelize = require('sequelize');
const connectString = '..'


const db = {

}


db.connect = new Sequelize(connectString);


//CREATE USER
db.User = db.connect.define('user', {
	name: Sequelize.STRING,
	password: Sequelize.STRING,
	email: Sequelize.STRING,

});

db.Activity = db.connect.define('activity', {
	name : Sequelize.STRING,
	cat : Sequelize.INTERGER,
});


db.TimeActual = db.connect.define('timeActual'{
	timeMinutes: Sequelize.STRING,
});

db.TimeEstimated = db.connect.define('TimeEstimated', 
	TimeEstimated : db.connect)


db.Calender = db.connect.define('WeekNumber', {
	WeekNumber : Sequelize.INTERGER,
});


db.User.hasMany(db.Activity);
db.Activity.belongsTo(db.User)

db.Activity.hasOne(db.TimeActual);
db.TimeActual.belongsTo(db.Activity);

db.Activity.hasOne(db.TimeEstimated);
db.TimeEstimated.belongsTo(db.Activity);

db.TimeActual.hasOne(db.Calender);
db.Calender.belongsTo(db.TimeActual);

db.TimeEstimated.hasOne(db.TCalender);
db.Calender.belongsTo(db.TimeEstimated);


module.exports = db;