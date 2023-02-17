const mongoose = require('mongoose')

const studentSchema = mongoose.model('User', {
        id: Number,
        name: String,
        programme: String,
        level: Number,
        hall: String
    });

module.exports = studentSchema;