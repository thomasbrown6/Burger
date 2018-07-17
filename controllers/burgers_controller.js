var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required
// GET ALL
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// INSERT
router.post("/api/burgers", function(req, res) {
    console.log(req.body);
    burger.insertOne([
        "burger_name"
    ], [
        req.body.name
    ], function(result) {
            // Sened back to the ID of the new quote
            res.json({ id: result.insertId });
        });
});

// UPDATE
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log(req.body)
    // If item's devoured is set to true, change it to false
    if (req.body.devoured === "true") {
        burger.updateOne(
            {
                devoured: false
            },
            condition,
            function(result) {
                if (result.changedRows === 0) {
                    // If no rows were changed, then the ID must not exist
                    return res.status(404).end();
                } else {
                    res.status(200).end();
                }
            }
        );
    }
    else {
        // If item's devoured is set to false, change it to true
        burger.updateOne(
            {
                devoured: true
            },
            condition,
            function(result) {
                if (result.changedRows === 0) {
                    // If no rows were changed, then the ID must not exist
                    return res.status(404).end();
                } else {
                    res.status(200).end();
                }
            }
        );
    }

});

// DELETE
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


// Export routes for server.js
module.exports = router;