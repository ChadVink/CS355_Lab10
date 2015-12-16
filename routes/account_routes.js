var express = require('express');
var router = express.Router();
var accountDal = require('../dal/account');

router.get('/all', function(req, res) {
    accountDal.GetAll(function (err, result) {
            if (err) throw err;
            //res.send(result);
            res.render('account/displayAllAccounts.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    accountDal.GetByID(req.query.email, function (err, result) {
            if (err) throw err;

            res.render('account/displayAccountInfo.ejs', {rs: result, email: req.query.email});
        }
    );
});

router.get('/create', function(req, res, next) {
    res.render('account/userFormCreate.ejs');
});

router.get('/save', function(req,res, next) {
    console.log("firstName equals: " + req.query.firstname);
    console.log("the lastName submitted was: " + req.query.lastname);

    accountDal.Insert(req.query, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully saved the data.");
        }
    });
});


module.exports = router;