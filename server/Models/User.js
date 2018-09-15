const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    rating: String,
    github: String,
    picture: String
});
 

module.exports = mongoose.model("User", UserSchema);
