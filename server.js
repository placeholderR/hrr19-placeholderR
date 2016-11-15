'use strict';

var express = require('express');
var path = require('path');
var app = express();

// port setup
app.set('port', process.env.PORT || 3000);

// serving static files
app.use(express.static(path.join(__dirname)));

app.listen(app.get('port'), function() {
  console.info('server is listening to http://localhost:%s', app.get('port'));
});