let orm = require("../config/orm");

let post = {
  all: function(cb) {
    orm.all("warcraftpost", function(res) {
      cb(res);
    });
  },
  one: function(condition, cb) {
    orm.one("warcraftpost", condition, function(res){
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("warcraftpost", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(cols, vals, condition, cb) {
    orm.update("warcraftpost", cols, vals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("warcraftpost", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (notesController.js).
module.exports = post;