var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("my beans has jeans");
})

module.exports = router;