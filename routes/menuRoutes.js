// const express = require('express');
// const router = express.Router();
// const MenuItems = require('./../models/menuitems.js'); // Match file name case exactly

// //post method for menuitem
// router.post('/', async (req, res) => {
//     try {
//       const data = req.body // assuming the request body conatins the menu data
  
//       // create a new menu document using the  Mongoose model
//       const newMenuItem = new MenuItems(data);
  
//       //save the new person to the database 
//       const response = await newMenuItem.save();
//       console.log('data saved');
//       res.status(200).json(response);
  
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ error: 'Internal Server Error', details: err.message });
//     }
//   })
  
  
  
//   //get menuitem folder
//   router.get('/', async (req,res) =>{
//     try {
//       const data = await MenuItems.find();
//       console.log("data fetched");
//       res.status(200).json(data);
//     }
//     catch(err){
//       console.log(err);
//       res.status(500).json({ error: 'Internal Server Error'})
  
//     }
//   })

//   module.exports = router;