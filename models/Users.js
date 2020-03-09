const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
// const SignUp = require("../src/Pages/SignUp");

const usersSchema = new Schema({
    // id: { type: Int, required: true },
    // firstname: {type: String, required: true},
    // lastname: {type: String, required: true},
    username: { type: String, required: true, unique: false },
    password: { type: String, required: true, unique: false },
    confirmPassword: { type: String, required: true, unique: false},
    email: { type: String, required: true, unique: false }
});

  
const User = mongoose.model("User", usersSchema);

module.exports = User;

