const express = require("express")
const router = express.Router()
const mongoose = require('mongoose'); //Import mongoDB
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({ title: String, userEmail: String, content: String, image: String, type: String });
const Post = mongoose.model('Post', userSchema);

//TODO: Make sure Post AD is available when logged in 

router.post("/", async (req, res) => {
    //Store ads into database
    console.log('Starting PostAd');
    const { title, content, image, type, email } = req.body;
    console.log(title, email);

    try {
        const ad = await Post.create({ title, content, image, type, userEmail: email })
        res.status(201).json({ message: "Ad successfully posted" })
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
})

router.get("/", async (req, res) => {
    //Get all ads from database
    try{
        Post.find({}).then(data =>{
            res.json(data)
        }).catch(err =>{
            res.status(408).json({message : err.message})
        })
    }catch(err){
        res.json({message : err.message})
    }
})



//TODO: Search feature
router.get("/searchAd", async (req, res) => {
    //maybe for search functionality?
})

module.exports = router;



