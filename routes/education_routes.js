var express = require('express');
var router = express.Router();
var educationDal = require('../dal/education');

router.get('/all', function(req, res) {
    educationDal.GetAll(function (err, result) {
            if (err) throw err;
            //res.send(result);
            res.render('displayAllEducation.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    educationDal.GetByID(req.query.school_id, function (err, result) {
            if (err) throw err;

            res.render('school/displaySchool.ejs', {rs: result, school_id: req.query.school_id});
        }
    );
});

module.exports = router;