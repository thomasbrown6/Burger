// Import the ORM to create functions that will interact with the database. 
var orm = require("../config/orm.js");



var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(name, cb) {
        orm.insertOne("burgers", "burger_name", name, function(res) {
            cb(res);
        });
    },
    updateOne: function(val, condition, cb) {
        orm.updateOne("burgers", val, condition, function(res) {
            cb(res);
        });
    }
};



module.exports = burger;