const mongoose = require('mongoose');

//define the person shchema
const personSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,

    },
    work: {
        type: String,
        enum: ['chef', 'manager', 'waiter'],
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    aadress:
    {
        type: String
    },
    salary: {
        type: Number,
        require: true
    }

});

// create person model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;

