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

router.get('/cards/getallcards', function(req, res, next) {
    fs.readFile('./data/cards.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
})

router.post('/cards/newcard', function(req, res, next) {
    res.send(req.body);
    console.log(req.body);
    fs.writeFileSync('./data/cards.json', JSON.stringify(req.body));
})

router.post('/cards/vote', function(req, res, next) {
    let obj = []

    let data = req.body;
    let id = req.body.cardCount;
    
    fs.readFile('./data/cards.json', (err, json) => {
        obj = JSON.parse(json);
        obj[id] = data;
        console.log(obj)
        res.send(obj)

        fs.writeFileSync('./data/cards.json', JSON.stringify(obj));
    })

    // console.log(obj)

    // res.send(req.body);
    // console.log(req.body);
    // fs.writeFileSync('./data/cards.json', JSON.stringify(req.body));
})

router.put('/cards/downvote', function(req, res, next) {
    res.send(req.body);
    console.log(req.body);
    fs.writeFileSync('./data/cards.json', JSON.stringify(req.body));
})

module.exports = router;
