
const Sequelize = require('sequelize');

const sequelize = new Sequelize('verceldb', 'default', 'qnSDMLVX5u4s', {
  host: 'ep-delicate-lake-a66yh3gf-pooler.us-west-2.aws.neon.tech',
  dialect: 'postgres',
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
});

const User = require('./user');
const Point = require('./point');

module.exports = {
  Point: Point(sequelize, Sequelize),
  User,
  sequelize,
  Sequelize,
};