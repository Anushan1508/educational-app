const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
    
        name: { type: String, required: true },
        grade: { type: String, required: true },
        students:[{
                studentid:{
                type:Schema.Types.ObjectId,
                ref:'user'
         },
        isVerified:{type:Boolean, default:false}
        
         } ],
        teacherid:{
                type:Schema.Types.ObjectId,
                ref:'user'
        },
        quiz:[{
                quizid:{
                        type:Schema.Types.ObjectId,
                        ref:'quiz'
                }
        }]
}
//,
// {timestamps:true}

);

const Lesson= mongoose.model("lesson",LessonSchema);
module.exports = Lesson;
