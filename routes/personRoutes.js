const express = require('express');
const router = express.Router();
const Person = require('./../models/person.js');




// post route to add a person
router.post('/', async (req, res) => {
    try {
        const data = req.body // assuming the request body conatins the person data

        // create a new person document using the  Mongoose model
        const newPerson = new Person(data);

        //save the new person to the database 
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
})

// get method to get all /person data
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })

    }
})

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;  //extract the id from url parameter
        const updatedPersonData = req.body;  //iudated data for the person

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, //return the update document 
            runValidators: true //run mongoose validation
        })
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('data updated');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })
    }

})
router.delete('/:id', async (req, res) => {
    try{
        const personId = req.params.id;  //extract the id from url parameter
        const response = await Person.findByIdAndDel(personId);
        if(!response){
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('data deleted');
        res.status(200).json({message:'person deleted successfully'});

    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })

    }
})




module.exports = router;