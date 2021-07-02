const express = require('express');
require('dotenv').config(); 
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const connectDB = require('./database/connection');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 5000;

// Log Requests
app.use(morgan('tiny'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})



app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
);

// Load Routers
app.use('/auth', require('./routes/userRoute'));
app.use('/lession', require('./routes/lessionRouter'));
//app.use('/admin', require('./routes/adminRoutes'));
//app.use('/contactform', require('./routes/contactRoutes'));

// Parse request to body-parser
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// mongodb connection
connectDB();

