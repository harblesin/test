const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

userModel = new Schema({
    userName: { type: String },
    password: { type: String }
});

const User = mongoose.model("User", userModel);

module.exports = User;