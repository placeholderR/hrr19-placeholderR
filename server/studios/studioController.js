var db = require('../db');

module.exports = {
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
};