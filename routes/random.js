const express = require('express');
const router = express.Router();
const connection = require('../db/database');
const tableNames = require('../config/constants/tableNames')



router.get('/', async (req, res) => {
    // res.render('index', { title: 'Express' });
    let {limit} = req.query;
    if (limit == null) {
        console.log("limit is null");
        limit = 1;
    }
    else {
        console.log(limit)
        limit = parseInt(limit) || 1
    }
    const word = await connection(tableNames.albanian).orderByRaw('rand()').limit(limit);
    console.log(req.query)
    res.json({word})
});


module.exports = router;