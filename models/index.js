
const Sequelize = require('sequelize');
const pg = require('pg');

const sequelize = new Sequelize('trackingdb', 'trackingdb', '6ibglv6qw3bicZhOOG5A5p2EDpGSu5K1', {
  host: 'dpg-coq6jhljm4es73ag8qe0-a.oregon-postgres.render.com',
  dialect: 'postgres',
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  },
  dialectModule: pg,
});

const User = require('./user');
const Point = require('./point');

module.exports = {
  Point: Point(sequelize, Sequelize),
  User,
  sequelize,
  Sequelize,
};