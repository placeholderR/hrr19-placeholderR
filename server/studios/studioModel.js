var Sequelize = require('sequelize');
var db = new Sequelize('stageup', 'root', '');
var Ticket = require('../tickets/ticketModel.js')

// defining models using js, instead of a schema file
var Studio = db.define('Studio', {
  name: Sequelize.STRING,
  img: Sequelize.STRING
});

Studio.hasMany(Ticket);

Studio.sync();

exports.Studio = Studio;