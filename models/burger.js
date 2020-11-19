// Import ORM to create functions that'll interact w/ the database
var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols & vals are arrays.
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

// Export the db functions for the controller (burgersController.js).
module.exports = burger;
