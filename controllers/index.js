var db = require('../db');

module.exports = {
  tickets: {
    get: function (req, res) {
      db.Ticket.findAll({include: [db.Studio]})
      .then(function(tickets) {
        res.json(tickets);
      })
    },
    post: function (req, res) {
      db.Studio.findOrCreate({where: {name: req.body.name}})
      .spread(function(studio, created) {
        db.Ticket.create({
          tickId: studio.get('id'),
          name: req.body.name
        })
        .then(function(ticket) {
          res.sendStatus(201);
        });
      });
    }
  },
  studios: {
    get: function (req, res) {
      db.Studio.findAll()
      .then(function(studio) {
        res.json(studio);
      });
    },
    post: function (req, res) {
      db.Studio.findOrCreate({where: {name: req.body.name}})
      .spread(function(studio, created) {
        res.sendStatus(created ? 201 : 200);
      });
    }
  }
};