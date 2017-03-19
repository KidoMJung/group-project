
// const Sequelize = require('sequelize');
// const db = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost/group_project`);





// //CREATE USER
// db.User = db.define('user', {
// 	name: Sequelize.STRING,
// 	password: Sequelize.STRING,
// 	email: Sequelize.STRING,

// });

// db.Activity = db.define('Activities', {
// 	name : Sequelize.STRING,
// 	cat : Sequelize.INTERGER,
// });


// db.TimeActual = db.define('timeActual'{
// 	timeMinutes: Sequelize.STRING,
// });

// db.TimeEstimated = db.define('TimeEstimated', 
// 	TimeEstimated : Sequelize.STRING,


// db.Calender = db.connect.define('WeekNumber', {
// 	WeekNumber : Sequelize.INTERGER,
// });


// db.User.hasMany(db.Activity);
// db.Activity.belongsTo(db.User)

// db.Activity.hasOne(db.TimeActual);
// db.TimeActual.belongsTo(db.Activity);

// db.Activity.hasOne(db.TimeEstimated);
// db.TimeEstimated.belongsTo(db.Activity);

// db.TimeActual.hasOne(db.Calender);
// db.Calender.belongsTo(db.TimeActual);

// db.TimeEstimated.hasOne(db.TCalender);
// db.Calender.belongsTo(db.TimeEstimated);


// db.sync(
//     {force: true}
// )
//     .then(function(db) {
//         const user1 = {
//             name: 'klaas',
//             email: 'klaas@gmail.com',
//             password: 'klaas123'
//         }

//         db.User.create(user1)
//     }).then(function(db) {
//     	console.log('creating activity')
//     	const activity1 = {
//     		name: 'Cooking',
//     		cat : 2,
    		
//     	}
//     	db.Activity.create(activity1)
//     })
//     .catch( (error) => console.log(error));


// module.exports = db;