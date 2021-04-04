const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessionSchema = new Schema({
    
        name: { type: String },
        grade: { type: String },
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
        // quiz:[{
        //         quizid:{
        //                 type:Schema.Types.ObjectId,
        //                 ref:'quiz'
        //         }
        // }]
}
//,
// {timestamps:true}

);

const Lession= mongoose.model("lesson",LessionSchema);
module.exports = Lession;
