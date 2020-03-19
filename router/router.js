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

router.post("/api/forum", function(req, res) {
    forum.create([
        "username", "post"
    ], [
        req.body.username, req.body.post
    ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});
router.delete("/api/forum/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    forum.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

module.exports = router;