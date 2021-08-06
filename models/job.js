const { Double } = require('mongodb')
const mongoose = require ('mongoose')

const jobSchema = new mongoose.Schema({

    Jobs: {
        type: String,
        required: true
    },

    place: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Job', jobSchema)
