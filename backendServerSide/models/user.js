const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, lowercase:true, unique: true, required:true},
    grade: { type: String, required: true },
    role: { 
        type: String,
        enum: ['student', 'teacher', 'Student', 'Teacher' ],
        default: 'student'
      },   
      passwordHash: { type: String, required:true  },
})

const User= mongoose.model("user",UserSchema);

module.exports = User;