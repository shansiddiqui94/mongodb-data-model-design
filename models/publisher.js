const mongoose = require('mongoose')
const Schema = mongoose.Schema
// structure below is denormalized 
const Publisher = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        url: {type: String, required: true}
    },
    {timestamps: true},
) // being accessed from line 2 

module.exports = mongoose.model('publishers', Publisher)