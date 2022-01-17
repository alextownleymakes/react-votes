var express = require('express');
var router = express.Router();

const dbo = require("../db/conn")
const ObjectId = require("mongodb").ObjectId;

var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cards/getallcards', function(req, res, next) {
    let dbc = dbo.getDb("cards");
    dbc
    .collection("cards")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
})

router.post('/cards/newcard', function(req, res, next) {
    let dbc = dbo.getDb();
    let card = req.body;

    dbc.collection("cards").insertOne(card, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    })
})

router.route('/cards/vote').post(function(req, res, next) {

    let data = req.body;
    let newData = {$set: {votes: data.votes}};

    let dbc = dbo.getDb();
    console.log(data)
    let myquery = { cardId: data.cardId };
    dbc
      .collection("cards")
      .updateOne(myquery, newData, function (err, resp) {
        if (err) throw err;
        console.log("1 document updated");
        res.json(resp);
      });

})


module.exports = router;
