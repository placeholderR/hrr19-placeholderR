'use strict';

var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var app = express();

var compiler = webpack(webpackConfig);

// port setup
app.set('port', process.env.PORT || 3000);

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