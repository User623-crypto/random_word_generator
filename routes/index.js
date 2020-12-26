var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port:8899,
  user: 'root',
  password:'testing1234',
  database: 'users'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',  function(req, res, next) {
  name = req.body.name;
  email = req.body.email;
  console.log(name + "  "+email);
  query = `INSERT INTO user 
            (
                name, email
            )
            VALUES
            (
                ?, ?
            )`;
  connection.query(query, [name , email], function (err, data) {
    if (err) {
      // some error occured
    } else {
      // successfully inserted into db
    }
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
