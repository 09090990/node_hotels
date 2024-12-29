const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;


const MenuItems = require('./models/menuitems.js');



app.get('/', function (req, res) {
  res.send('Hello World')
})



//import the router files 
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes')

// use the routes
app.use('/person',personRoutes)
app.use('/menuitem',menuRoutes)


app.listen()