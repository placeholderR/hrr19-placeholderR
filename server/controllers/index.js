var db = require('../../db');

module.exports = {
  tickets: {
    get: function (req, res) {
      db.Ticket.findAll()
      .then(function(tickets) {
        res.json(tickets);
      })
    },
    post: function (req, res) {
      db.Ticket.findOrCreate(
        {
          where:
          {
            name: req.body.name,
            group: req.body.group,
            comp: req.body.comp,
            rush: req.body.rush
          }
        })
      .then(function(ticket) {
        //console.log(req.body.name, 'req');
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