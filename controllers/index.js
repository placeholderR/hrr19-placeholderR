var db = require('../db');

module.exports = {
  tickets: {
    get: function (req, res, cb) {
      db.Ticket.findAll()
      .then(function(tickets) {
        console.log(res.json(tickets), 'res');
      })
    },
    post: function (req, res) {
      db.Ticket.findOrCreate(
        {
          where:
          {
            name: req.body.name,
            rush: req.body.rush
          }
        })
      .then(function(ticket) {
        console.log(req.body.name, 'req');
        res.sendStatus(201);
      });
    }
  },
  studios: {
    get: function (req, res) {
      // db.Studio.findAll({include: [db.Ticket]})
      // .then(function(studio) {
      //   res.json(studio);
      // });
    },
    post: function (req, res) {
      // db.Studio.findOrCreate({where: {name: req.body.name}})
      // .spread(function(studio, created) {
      //   res.sendStatus(created ? 201 : 200);
      // });
    }
  }
};