var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/bestAPI", function(req, res, next) {
  res.render('test', { title: 'beans or jeans' });
})

router.get('/cardstest', function(req, res, next) {
  res.send("test")
})

module.exports = router;
