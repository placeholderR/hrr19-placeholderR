'use strict';

var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

var compiler = webpack(webpackConfig);

// port setup
app.set('port', process.env.PORT || 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/api', router);

// serving static files
app.use(express.static(__dirname + '/dist'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.get('/api/studios', function(req, res) {
  // show studios profiles from db
  res.status(200).send('studio\'s page');
});

app.get('/api/users', function(req, res) {
  res.status(200).send('logged in users here');
});

app.listen(app.get('port'), function() {
  console.info('server is listening to http://localhost:%s', app.get('port'));
});