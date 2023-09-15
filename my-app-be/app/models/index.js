const dbconfig = require('../config/config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASS, {
     host: dbconfig.HOST,
     dialect: dbconfig.dialect,
     pool: {
          max: dbconfig.max,
          min: dbconfig.min,
          aquire: dbconfig.aquire,
          idle: dbconfig.idle
     }
})

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.product = require('./product.model')(sequelize, Sequelize);

module.exports = db;
