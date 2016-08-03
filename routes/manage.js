var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var pool = require('../model/db');

/* GET manage listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource in GET');
  pool.getConnection(function(err, connection) {
    // Use the connection
    connection.query( 'SELECT * FROM interns', function(err, rows) {
      // And done with the connection.
      if (err) return next(err);
      res.json(rows);
      console.log(rows[0]);
      connection.release();


    });
  });
});

router.get('/setup', function(req, res) {

  // create a sample user
  var nick = new Object({
    user_ID : 0002,
    username: 'Nick',
    password: 1234,

  });

  // save the sample user
  pool.getConnection(function(err, connection) {
    // Use the connection
    var post  = nick;
    var query = connection.query('INSERT INTO users SET ?', post, function(err, result) {
      // Neat!

    });

    connection.release();
    console.log(query.sql);
  });

});

module.exports = router;
