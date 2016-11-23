var controller = require('./controllers');
var router = require('express').Router();

router.get('/tickets', controller.tickets.get);

router.post('/tickets', controller.tickets.post);

router.get('/studios', controller.studios.get);

router.post('/studios', controller.studios.post);

module.exports = router;