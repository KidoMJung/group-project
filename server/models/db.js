const Sequelize = require('sequelize');
db = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@ 
// hier nog niewe database maken