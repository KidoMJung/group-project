const Sequelize = require('sequelize');
const db = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost/group_project`);

// define User Model
db.User = db.define('user', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
});

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
    .catch( (error) => console.log(error));

module.exports = db
