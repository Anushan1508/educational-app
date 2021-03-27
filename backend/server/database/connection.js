const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/';

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