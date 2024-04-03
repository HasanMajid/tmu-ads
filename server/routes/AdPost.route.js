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

    if (!title || !content || !type) {
        return res.status(403).json({ error: 'All fields are required' });
    }

    try {
        const ad = await Post.create({ title, content, image, type, userEmail: email })
        res.status(201).json({ message: "Ad successfully posted" })
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
})

router.get("/", async (req, res) => {
    //Get all ads from database
    try {
        Post.find({}).then(data => {
            res.json(data)
        }).catch(err => {
            res.status(408).json({ message: err.message })
        })
    } catch (err) {
        res.json({ message: err.message })
    }
})

router.get("/:type", async (req, res) => {
    const type = req.params.type;
    console.log(type)
    //Get all ads from database based on type

    try {
        Post.find({ type }).then(data => {
            res.json(data)
        }).catch(err => {
            res.status(408).json({ message: err.message })
        })
    } catch (err) {
        res.json({ message: err.message })
    }
})


router.get("/search/:search/:type", async (req, res) => {
    const type = req.params.type;
    const search = req.params.search;
    //Search for ads


    let fields;
    if (type === "All") {
        fields = { $or: [{ title: { $regex: search, $options: 'i' } }, { content: { $regex: search, $options: 'i' } }] }
    }
    else {
        fields = { type, $or: [{ title: { $regex: search, $options: 'i' } }, { content: { $regex: search, $options: 'i' } }] }
    }

    try {
        Post.find(fields).then(data => {
            res.json(data)
        }).catch(err => {
            res.status(408).json({ message: err.message })
        })
    } catch (err) {
        res.json({ message: err.message })
    }
})

module.exports = router;



