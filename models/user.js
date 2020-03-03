const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: Int, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true}
});


// const postSchema = new Schema({
//     title: { type: String, required: true },
//     author: { type: String, required: true },
//     body: String,
//     date: { type: Date, default: Date.now }
//   });
  
const User = mongoose.model("User", userSchema);

module.exports = User;

//   const Post = mongoose.model("Post", postSchema);
  
//   module.exports = Post;
  