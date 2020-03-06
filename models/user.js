const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const SignUp = require("../src/Pages/SignUp");

const userSchema = new Schema({
    // id: { type: Int, required: true },
    // firstname: {type: String, required: true},
    // lastname: {type: String, required: true},
    username: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true},
    email: { type: String, required: true }
});

  
const User = mongoose.model("User", userSchema);

module.exports = User;

