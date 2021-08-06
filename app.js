const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb+srv://admin:v3bZwwCDmpv3EiyV@cluster0.lof1l.mongodb.net/Jobs"

const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const jobRouter = require('./routes/Jobs')
app.use('/jobs', jobRouter)

app.listen(3000, () => {
    console.log('Server started')
})
