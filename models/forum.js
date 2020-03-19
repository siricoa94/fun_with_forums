let orm = require("../config/orm");

let forum = {
  all: function(cb) {
    orm.all("forum", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("forum", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("forum", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("forum", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (notesController.js).
module.exports = forum;