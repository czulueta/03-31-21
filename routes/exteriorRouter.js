const express = require("express")
const exteriorRouter = express.Router()
const Exterior = require("../models/exterior.js")

exteriorRouter.get("/", (req, res, next) => {
    Exterior.find((err, jobs) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(jobs)
    })
})
exteriorRouter.post("/", (req, res, next) => {
    const newJob = new Exterior(req.body)
    newJob.save((err, savedJob) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedJob)
    })
})
exteriorRouter.delete("/:jobId", (req, res, next) => {
    Exterior.findOneAndDelete({ _id: req.params.jobId}, (err, deletedJob) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`successfully deleted ${deleteJob.customerName}'s job from the datatbase`)
    })
})
exteriorRouter.put("/:jobId", (req, res, next) => {
    Exterior.findOneAndUpdate({ _id: req.params.jobId}, req.body,{new:true}, (err, updatedJob) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedJob)
    })
})
module.exports = exteriorRouter