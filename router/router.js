let express = require("express");

let router = express.Router();

let path = require("path");

let forum = require("../models/forum");

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});
router.get("/forum", function(req, res){
    res.sendFile(path.join(__dirname, "../public/forum.html"));
});
router.get("/data", function(req, res) {
    forum.all(function(data) {
      res.json({ forum: data });
    });
});

module.exports = router;