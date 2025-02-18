const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }], // Reference to Book
});

module.exports = mongoose.model("User", UserSchema);
