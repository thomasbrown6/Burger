var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required
// GET ALL
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// INSERT
router.post("/api/burgers", function (req, res) {
    burger.insertOne(toString(req.body.burger_name), function (result) {
        // Sened back to the ID of the new quote
        res.json({ id: result.insertId });
    });
});

// UPDATE
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    );
});


// Export routes for server.js
module.exports = router;