let express = require("express");

let router = express.Router();

let path = require("path");

let forum = require("../models/forum");

let post = require("../models/post");
// PUBLIC PATHS //// PUBLIC PATHS //// PUBLIC PATHS //// PUBLIC PATHS //// PUBLIC PATHS //
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});
router.get("/forum", function(req, res){
    res.sendFile(path.join(__dirname, "../public/forum.html"));
});
router.get("/edit", function(req, res){
  res.sendFile(path.join(__dirname, "../public/edit.html"));
});
// FORM DATA //// FORM DATA //// FORM DATA //// FORM DATA //// FORM DATA //// FORM DATA //
router.get("/data/forum", function(req, res) {
    forum.all(function(data) {
      res.json({ forum: data });
    });
});
router.post("/api/forum", function(req, res) {
    forum.create([
        "username", "userpassword","useremail","userid"
    ], [
        req.body.username, req.body.userpassword, req.body.useremail, req.body.userid
    ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});
// POST DATA //// POST DATA //// POST DATA //// POST DATA //// POST DATA //// POST DATA //
router.get("/data/post", function(req, res) {
  post.all(function(data){
    res.json({post: data});
  });
})
router.post("/api/post", function(req, res){
  post.create([
    "posttitle","post","userid"
  ],[
    req.body.posttitle, req.body.post, req.body.userid
  ], function(result){
    res.json({ id: result.insertId });
  });
});
router.delete("/api/post/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  post.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
router.put("/api/post/:id", function(req, res){
  let condition = "id=" + req.params.id;

  post.update(condition, function(result){
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
router.get("/data/post/:id", function(req, res) {
  let condition = "id = " + req.params.id;
  post.one(condition, function(data){
    res.json({post: data});
  });
});

module.exports = router;