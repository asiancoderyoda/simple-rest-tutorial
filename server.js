const express = require('express');
const app = express();
const colors = require('colors');
const dotenv = require('dotenv');

const details = require ('./routes/detailroutes');

dotenv.config({path: './config/config.env'});

const connectDB = require ('./config/db');

connectDB();

app.use(express.json());

app.use('/api/v1/users/', details);

PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgGreen.yellow.bold));