// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devour-burger").on("click", function (event) {
    var id = $(this).data("id");
    var gobbled = true;

    // var newBurgerState = {
    //   devoured: burgerEat
    // };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: gobbled
    }).then(
      function () {
        console.log("changed devoured to true");
        // Reload the page to get the updated list
        location.reload();
      });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: $("[burger_name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("picked a new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
//   )};
// )};
