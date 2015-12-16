var express = require('express');
var router = express.Router();
var companyDal = require('../dal/company');

router.get('/gpa', function(req, res) {
    companyDal.GetGPA(function (err, result) {
            if (err) throw err;
            //res.send(result);
            res.render('displayCompanyGPA.ejs', {rs: result});
        }
    );
});

router.get('/all', function(req, res) {
    companyDal.GetAll(function (err, result) {
            if (err) throw err;
            //res.send(result);
            res.render('company/displayCompanyAll.ejs', {rs: result});
        }
    );
});

router.get('/', function(req, res) {
    companyDal.GetCompany(req.query.companyName, function (err, result) {
            if (err) throw err;
            //res.send(result);
            res.render('company/displayCompany.ejs', {rs: result, companyName:req.query.companyName});
        }
    );
});

router.get('/create', function(req, res, next) {
    companyDal.GetAll(function(err, result) {
        res.render('company/company_create', {address : result});
    });});

router.get('/save', function(req,res, next) {

    companyDal.Insert(req.query, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully saved the data.");
        }
    });
});

module.exports = router;