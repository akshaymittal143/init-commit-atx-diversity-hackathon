const mongoose = require("mongoose");

let PosterSchema = new mongoose.Schema({
    title: String,
    organization: String,
    tags: [String],
    description: String
});
 

module.exports = mongoose.model("Poster", PosterSchema);
