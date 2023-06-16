const mongoose = require("mongoose");

const professionalSchema = new mongoose.Schema({
  bussinessName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  availability: [
    {
      day: {
        type: String,
        required: true,
      },
      startTime: {
        type: String,
        required: true,
      },
      endTime: {
        type: String,
        required: true,
      },
    },
  ],
  ratings: [
    {
      userId: { type: String },
      rating: {
        type: Number,
      },
    },
  ],
  portfolio: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      imageUrl: {
        type: String,
        required: true,
      },
    },
  ],
});

const BeautyProfessionalModel = mongoose.model(
  "BeautyProfessional",
  professionalSchema
);

module.exports = BeautyProfessionalModel;
