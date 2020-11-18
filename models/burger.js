// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (name, cb) {
    orm.insertOne(name, cb, function (res) {
      cb(res);
    });
  },
  update: function (id, cb) {
    orm.update(id, cb, function (res) {
      cb(res);
    });
  },
  delete: function (id, cb) {
    orm.delete(id, cb, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
