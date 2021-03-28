const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/';

//const url = 'mongodb+srv://admin:admin123@cluster0.qc9ao.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log(`MongoDB Connected: ${url}`);
    } catch (err) {
        console.error(err);
    }
};
module.exports = connectDB;

