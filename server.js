var express = require("express");
var bodyParser = require("body-parser");


// Sets up the Express App
// =============================================================
var app = express();

var PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Sever Listener
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});