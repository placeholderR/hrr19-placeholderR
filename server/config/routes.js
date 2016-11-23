var studioController = require('../studios/studioController');
var ticketController = require('../tickets/ticketController');

module.exports = ((app, express) => {

  app.get('/api/tickets', ticketController.get);

  app.post('/api/tickets', ticketController.post);

  app.get('/api/studios', studioController.get);

  app.post('/api/studios', studioController.post);
});