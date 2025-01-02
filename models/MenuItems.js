const mongoose = require('mongoose');

//define the menu shchema
const MenuItemSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required:true

    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default:false
    },
    ingredients:
    {
        type: [String]
    },
    num_sales: {
        type: Number,
        default: 0,
      
    }

});

// create person model
const MenuItems = mongoose.model('MenuItems',MenuItemSchema);
module.exports = MenuItems;

