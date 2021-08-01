const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://admin:v3bZwwCDmpv3EiyV@cluster0.lof1l.mongodb.net/Jobs?retryWrites=true&w=majority'

const app = express()

mongoose.connect(url, {userNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const jobRouter = require('./routes/Jobs')
app.use('/jobs', jobRouter)

app.listen(9000, () => {
    console.log('Server started')
})
