const express = require('express')
const app = express()
const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body


// const MenuItems = require('/models/MenuItems.js');



app.get('/', function (req, res) {
  res.send('Hello World')
})



//import the router files 
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes')

// use the routes
app.use('/person',personRoutes)
app.use('/menuitem',menuRoutes)


app.listen(3000)