const mongoose = require("mongoose");

let PosterSchema = new mongoose.Schema({
    name: String,
    project: String,
    rating: String,
    picture: String
});
 

module.exports = mongoose.model("User", PosterSchema);
