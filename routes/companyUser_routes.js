var express = require('express');
var router = express.Router();
var companyUserDal = require('../dal/companyUser');

router.get('/', function(req, res) {
    companyUserDal.GetInfo(function (err, result) {
            if (err) throw err;
            //res.send(result);
            res.render('displayCompanyUser.ejs', {rs: result});
        }
    );
});

module.exports = router;