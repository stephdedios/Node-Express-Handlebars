// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-state").on("click", function (event) {
    var id = $(this).data("id");
    var newState = $(this).data("newstate");

    var newDevouredState = {
      devoured: true,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      console.log("changed devoured to", newState);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger: $("#ca").val().trim(),
      // devoured: true
    };

    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new Burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
