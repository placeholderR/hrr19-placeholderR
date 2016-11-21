var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'stageup'
});

connection.connect(null, function(err) {
  if (err) console.log(err,'error!!!');
  console.log('Database is connected...')
});

module.exports = connection;