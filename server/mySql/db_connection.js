var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'user',
  passwor  : 'password',
  database : 'test'
});

connection.connect();

connection.query('SELECT * from angular_form', function(err, rows,fields){
  if(!err){
    console.log('the soution is : ', rows);
  } else {
    console.log('error while perfrming query');
  }
});

connection.end();