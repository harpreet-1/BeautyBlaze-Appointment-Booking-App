const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["customer", "beautyProfessional"],
    required: true,
  },
  otp: {
    type: String,
    default: null,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
