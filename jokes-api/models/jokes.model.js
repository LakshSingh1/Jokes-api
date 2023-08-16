const mongoose = require('mongoose');

const JokesSchema = new mongoose. Schema ({
    description:{
            type: String,
            required: [true, "Description name is required"],
            minlength: [6, "Description name must be at least 6"]
        }
    
    },{ timestamps: true })


const Jokes = mongoose.model('Jokes', JokesSchema);

module.exports = Jokes