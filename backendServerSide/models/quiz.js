const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    quiz: [{
        question: { type: String },
        answers: [{
            type: String
        }],
        trueAnswer: { type: String },
    }],
    lessionId: {
        type: Schema.Types.ObjectId,
        ref: 'lession'
    },
})

const Quiz = mongoose.model("quiz", QuizSchema);
module.exports = Quiz;