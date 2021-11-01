const mongoose = require("mongoose");

const criminalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
  },
  contact: {
    type: String,
    required: true,
    unique: true,
  },
  crime: {
    type: String,
    required: true,
  },
  criminalImage: {
    type: String,
    required: true,
  },
  criminalFingerprint: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Criminal", criminalSchema);
