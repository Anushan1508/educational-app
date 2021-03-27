const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, lowercase:true, unique: true, required:true},
    grade: { type: String, required: true },
    password: { type: String, required:true  },
    roles: { 
        type: String,
        enum: ['student', 'teacher','admin'],
        default: 'student'
      },   
})

const User= mongoose.model("user",UserSchema);

module.exports = User;