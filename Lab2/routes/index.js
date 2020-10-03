'use strict';
var express = require('express');
var router = express.Router();

// Get Calculator page
router.get('/Lab3', function (req, res) {
    // getting variables from query string.

    var method = req.query.method;
    var number1 = parseFloat(req.query.x)
    var number2 = parseFloat(req.query.y);
    var result = 0;
    if (method == 'multiply') {
        result = number1 * number2;
    }
    else if (method == 'add') {
        result = number1 + number2;
    }

    else if (method == 'subtract') {
        result = number1 - number2;
    }
    else if (method == 'divide') {
        result = number1 / number2;
    }
    else {
        result = "The method entered by you doesn't corresponds to any value";
    }
    console.log(result);

    res.render('answer', { title: 'Jeshan\'s Calculator ', result: result,method : method });
});
/* GET home page. */

router.get('/', function (req, res) {
    res.render('index', { title: 'Calculate by modifying the query string!!!Dont forget to add lab3 in query string' });
});



module.exports = router;
