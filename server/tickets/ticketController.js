var db = require('../db');

module.exports = {
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
          rush: req.body.rush,
          stage: req.body.stage,
          date: req.body.date,
          date2: req.body.date2
        }
      })
    .then(function(ticket) {
      //console.log(req.body.name, 'req');
      res.sendStatus(201);
    });
  },
  put: function (req, res) {
    db.Ticket.update(
      {
        name: req.body.name,
        date: req.body.date,
        date2: req.body.date2,
        group: req.body.group,
        comp: req.body.comp,
        rush: req.body.rush,
        stage: req.body.stage
      },
      {
        fields: ['name', 'date', 'date2', 'group', 'comp', 'rush', 'stage'],
        where: {id: req.params.id}
      }
    )
    .then( ticket => {
      res.sendStatus(200);
    })
  },
  getId: function (req, res) {
    db.Ticket.find(
      {
        where: {id: req.params.id}
      })
    .then(ticket => {
      res.json(ticket);
    })
  },
  remove: function (req, res) {
    db.Ticket.destroy(
      {
        where: {id: req.params.id}
      })
    .then(ticket => {
      res.sendStatus(200);
    })
  }
};