const express = require("express")
const interiorRouter = express.Router()
const Interior = require("../models/interior.js")

interiorRouter.get("/", (req, res, next) => {
    Interior.find((err, jobs) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(jobs)
    })
})
interiorRouter.post("/", (req, res, next) => {
    const newJob = new Interior(req.body)
    newJob.save((err, savedJob) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedJob)
    })
})
interiorRouter.delete("/:jobId", (req, res, next) => {
    Interior.findOneAndDelete({ _id: req.params.jobId}, (err, deletedJob) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`successfully deleted ${deletedJob.customerName}'s job`)
    })
})
interiorRouter.put("/:jobId", (req, res, next) => {
    Interior.findOneAndUpdate({ _id: req.params.jobId}, req.body, { new: true}, (err, updatedJob) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(updatedJob)
    })
})
module.exports = interiorRouter