const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Fjalë e rastësishme',message:'Tis is Liburne🤞🐱‍👓🎉🙌' });
  // res.json({message:"🎉🎉🐱‍🏍 Go to /random to get a randomWord 🤞🐱‍👓🎉🙌",
  // query:"?limit=1  to return as much words as needed in this case 1"})
});


module.exports = router;
