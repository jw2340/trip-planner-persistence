var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant =require('./restaurant');
var Activity =require('./activity');

var Day = db.define('day', {
  number: Sequelize.INTEGER
});

Day.hasOne(Hotel);
Day.belongsToMany(Restaurant, { through: 'day_restaurant' });
Day.belongsToMany(Activity, { through: 'day_activity' });

module.exports = Day;
