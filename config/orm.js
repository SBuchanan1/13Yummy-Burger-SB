// Import MySQL connection.
var connection = require("../config/connection.js");


// function selectAll();
// function insertOne();
// function updateOne();

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";




const orm = {
  selectAll: function (cb) {
    let queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (name, cb) {
    let queryString = "INSERT INTO burgers (burgers_name) VALUE (?)"

    connection.query(queryString, name, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {burger_name: Good Burger, devoured: true}
  updateOne: function (id, cb) {
    let queryString = "UPDATE burgers SET devoured=true WHERE id = ?";

    console.log(queryString);
    connection.query(queryString, id, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

// Export the orm object for the model (burgers.js).
module.exports = orm;