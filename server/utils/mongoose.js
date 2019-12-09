console.log("mongoose.js is running");
const mongoose = require("mongoose");

module.exports = function(my_first_db) {
    mongoose.connect(`mongodb://localhost/${my_first_db}`);
    require("../models/task");
}