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

/* GET users listing. */
router.get('/', async function(req, res, next) {
  // let lal = new Array(5).fill(1);
  // await new Promise((resolve, reject) => {
  // resolve(connection.query("select * from user",function (err,res) {
  //     for (const re of res) {
  //       lal.push(re.name)
  //     }}))
  //
  // }).then().catch(e=>{})

  console.log(lal)

});

module.exports = router;
