'use strict';

var express = require('express');
var app = express();

// port setup
app.set('port', process.env.PORT || 3000);

// serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
  console.info('server is listening to http://localhost:%s', app.get('port'));
});