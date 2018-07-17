$(function() {
    // To devour burger
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newdevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newdevour
        };

        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("eaten the burger");
                // Reload the page to get update
                location.reload();
            }
        );
    });

    // Add new burger
    $(".create-form").on("submit", function(event) {
        // preventDefault on the submit event
        event.preventDefault();

        var newBurger = {
            name: $("#bu").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        );
    });

    // To delete burger from list
    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        // Delete request
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger ", id);
                location.reload();
            }
        )
    })


});