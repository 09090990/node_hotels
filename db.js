//reponsible for connection setup to node js and mongodb 

const mongoose = require('mongoose');
require('dotenv').config();


// const mongoURL = 'mongodb://mongodb://127.0.0.1:27017/hotel' // change the name with your database 
const mongoURL = process.env.MONGODB_URL;

//setup mongodb connection 
// mongoose.connect(mongoURL,{
//  useNewUrlParser:true,
//  useUnifiedTopology:true
// })

mongoose.connect('mongodb://127.0.0.1:27017/hotel');

//get the default connection 
// mongoose maintains a default connection object representing the mongodb connection

const db = mongoose.connection;

//define event listener for database connection

db.on('connected', () => {
    console.log('connected to mongoDB server');
});

db.on('error', (err) => {
    console.log('error while connecting to mongodb server:', err);
});

db.on('disconnected', () => {
    console.log(' mongodb server disconnected');
});

// export the database connection
module.exports = db;
