const { Double } = require('mongodb')
const mongoose = require ('mongoose')

const jobSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    salary: {
        type: Double,
        required: true
    }
})

module.exports = mongoose.model('Job', jobSchema)
