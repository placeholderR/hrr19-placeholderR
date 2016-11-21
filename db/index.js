var Sequelize = require('sequelize');
var db = new Sequelize('stageup', 'root', '');

// defining models using js, instead of a schema file
var Ticket = db.define('Ticket', {
  name: Sequelize.STRING
});

var Studio = db.define('Studio', {
  name: Sequelize.STRING,
  img: Sequelize.STRING
});

Studio.belongsTo(Ticket);

Ticket.hasMany(Studio);


Studio.sync();
Ticket.sync();

exports.Studio = Studio;
exports.Ticket = Ticket;