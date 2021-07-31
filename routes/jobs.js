const express = require('express')
const job = require('../models/job')
const router = express.Router()
const Job = require('../models/job')

router.get('/'), async(req, res) => {
    try{
        const jobs = await Job.find()
        res.json(Jobs)
    }catch(err){
        res.send('Error ' + err)
    }
}

router.get('/:id'), async(req, res) => {
    try{
        const job = await Job.findById(req.params.id)
        res.json(job)
    }catch(err){
        res.send('Error ' + err)
    }
}

router.post('/', async(req, res) =>{
    const job = new Job({
        name: req.body.name,
        company: req.body.company,
        place: req.body.place,
        salary: req.body.salary
    })

    try{
        const a1 = await job.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }})

    router.patch('/:id', async(req,res) =>{
        try{
            const job = await Job.findById(req.params.id)
            job.place = req.body.place
            const a1 = await job.save()  
            res.json(a1)  
        }catch(err){
            res.send('Error')
        }
    })
    
    router.delete('/:id', async(req,res) =>{
        try{
            const job = await Job.deleteByid(req.params.id)
            job.place = req.body.place
            const a1 = await job.save()  
            res.json(a1)  
        }catch(err){
            res.send('Error')
        }
    })

module.exports = router