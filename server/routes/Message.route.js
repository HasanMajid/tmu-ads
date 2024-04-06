const express = require("express")
const router = express.Router()
const mongoose = require('mongoose'); //Import mongoDB
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const [, Post] = require('./AdPost.route');

const messageSchema = new mongoose.Schema({
    adPostId: String,
    adPostTitle: String,
    sender: String,
    recipient: String,
    message: String,
    timestamp: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);


router.post("/", async (req, res) => {
    const { adPostId, adPostTitle, sender, recipient, message } = req.body;
    console.log("Message:", adPostId, adPostTitle, sender, recipient, message)

    try {
        const newMessage = new Message({ adPostId, adPostTitle, sender, recipient, message });
        newMessage.save();
        res.status(200).send({ message: 'Message sent successfully' });
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: 'Error sending message' });
    }
})

// Fetches Messages
router.get("/messages/:adPostId/:sender/:recipient", async (req, res) => {
    const { adPostId, sender, recipient } = req.params;
    console.log("Fetching Chat messag", adPostId, sender, recipient);

    try {
        const messages = await Message.find({
            adPostId,
            $or: [
                { sender: sender, recipient: recipient },
                { sender: recipient, recipient: sender }
            ]
        }).sort({ timestamp: 1 });
        res.status(200).send(messages);
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: 'Error fetching messages' });
    }
})

// Fetches Chats
router.get("/chats/:userEmail", async (req, res) => {
    const { userEmail } = req.params;

    try {
        const chats = [];

        //Get all adPostIds with the given sender email
        let adPostIds = await Message.distinct('adPostId', {
            sender: userEmail
        });
        console.log("AdPostId as sender",adPostIds);

        for (let adPostId of adPostIds) {
            if (adPostIds.includes(adPostId)) continue;
            const post = await Post.findOne({ _id: adPostId });
            if (userEmail !== post.userEmail) {
                chats.push({
                    adPostId: adPostId,
                    adEmail: post.userEmail,
                    adPostTitle: post.title,
                    recipient: post.userEmail,
                });
            }
        }

        //Get all adPostIds with the given recipient email
        //Note: As a recipient, you can have multiple chats for the same Post
        const adPostIds2 = await Message.distinct('adPostId', {
            recipient: userEmail
        });

        // const messages = await Message.find({ recipient: userEmail });
        // const adPostIds2 = messages.map(message => message.adPostId);
        // console.log("AdPostId as recipient",adPostIds);

        for (let adPostId of adPostIds2) {
            const post = await Post.findOne({ _id: adPostId });
            const message = await Message.findOne({ adPostId: adPostId, recipient: userEmail });
            if (userEmail !== message.sender) {
                chats.push({
                    adPostId: adPostId,
                    adEmail: post.userEmail,
                    adPostTitle: post.title,
                    recipient: message.sender
                });
            }
        }
        res.status(200).send(chats);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Error fetching chats' });
    }
});

//Get all convos in database
router.get("/", async (req, res) => {
    try {
        Message.find({}).then(data => {
            res.json(data)
        }).catch(err => {
            res.status(408).json({ message: err.message })
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: 'Error fetching messages' });
    }
})


module.exports = router;