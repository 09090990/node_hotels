const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config();
const passport = require('./auth');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// const MenuItems = require('././models/menuitems.js');

//middle ware function
const logRequest = (req, res, next) => {
  console.log(`${new Date().toLocaleString()} Request Made to: ${req.originalUrl}`);
  next(); // Move to the next middleware or route handler
};

app.use(logRequest);
const localAuthMiddleware = passport.authenticate('local',{session:false})
app.get('/', localAuthMiddleware,function (req, res) {
  res.send('Welcome to our Hotel')
})



app.use(passport.initialize());

// app.post('/', async (req, res) => {
//   try {
//     const data = req.body // assuming the request body conatins the menu data

//     // create a new menu document using the  Mongoose model
//     const newMenuItem = new MenuItems(data);

//     //save the new person to the database 
//     const response = await newMenuItem.save();
//     console.log('data saved');
//     res.status(200).json(response);

//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server Error', details: err.message });
//   }
// })
// app.get('/', async (req, res) => {
//   try {
//     const data = await MenuItems.find();
//     console.log("data fetched");
//     res.status(200).json(data);
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server Error' })

//   }
// })


//import the router files 
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes')

// use the routes
app.use('/person',localAuthMiddleware, personRoutes)
app.use('/menuitem',menuRoutes)


app.listen(3000)