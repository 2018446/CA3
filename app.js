const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://admin:STYwH8E3T7qLUMqV@cluster0.lof1l.mongodb.net/Jobs?retryWrites=true&w=majority'

const app = express()

mongoose.connect(url, {userNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const jobRouter = require('./routes/jobs')
app.use('/jobs', jobRouter)

app.listen(9000, () => {
    console.log('Server started')
})
