var express = require('express');
var app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// port setup
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'));
module.exports = app;