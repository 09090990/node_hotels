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
    address:
    {
        type: String
    },
    salary: {
        type: Number,
        require: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

personSchema.pre('save', async function (next){
    const person = this;

    //hash the password only if it has been modified (e.g. when created)
    if (!person.isModified('password')) return next();
    try {
        //hash password generation
        const salt = await bcrypt.genSalt(10);

        //hash password 
        const hashedPassword = await bcrypt.hash(person.password, salt);
        person.password = hashedPassword;
        next();

    } catch (err) {
        return next(err);
    }
})

personSchema.methods.comparePassword = async function (candidatePassword){
    try{
        //use bcrypt to compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}

// create person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;

