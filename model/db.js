var express = require('express');
// importing mysql
var mysql = require('mysql');
var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : '99x'
});

module.exports = pool;
