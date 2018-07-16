$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newdevour = $(this).attr("data-newdevour", true);

        var newDevourState = {
            devoured: newdevour
        };

        // Send the PUT request
        $.ajax("/api/burgers" + id, {
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

});