const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  lastname: {
    type: String,
    required: true,
    min: 3,
    max: 20
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  grade: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['student', 'teacher', 'Student', 'Teacher'],
    default: 'student'
  },
  passwordHash: {
    type: String,
    required: true
  }
})

const User = mongoose.model("user", UserSchema);

module.exports = User;