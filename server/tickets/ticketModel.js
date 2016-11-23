var Sequelize = require('sequelize');
var db = new Sequelize('stageup', 'root', '');
var Studio = require('../studios/studioModel.js');

// defining models using js, instead of a schema file
var Ticket = db.define('Ticket', {
  name : Sequelize.STRING,
  group: Sequelize.BOOLEAN,
  comp : Sequelize.BOOLEAN,
  rush : Sequelize.BOOLEAN
});

Ticket.belongsTo(Studio);

Ticket.sync();

exports.Ticket = Ticket;