const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser'); 

const connectDB = require('./server/database/connection');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8800;

// Log Requests
app.use(morgan('tiny'));




// Parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})



app.use(express.json());
app.use(cookieParser());

// Load Routers
app.use('/auth', require('./server/routes/userRoute'));
app.use('/lession', require('./server/routes/lessionRouter'));

// mongodb connection
connectDB();