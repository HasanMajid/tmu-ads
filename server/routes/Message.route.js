const express = require("express")
const router = express.Router()
const mongoose = require('mongoose'); //Import mongoDB
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const messageSchema = new mongoose.Schema({
    adPostID: String,
    sender: String,
    recipient: String,
    message: String,
    timestamp: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);


router.post("/", async (req, res) => {
    const { adPostID, sender, recipient, message } = req.body;

    try {
        const newMessage = new Message({ adPostID, sender, recipient, message });
        await newMessage.save();

        res.status(200).send({ message: 'Message sent successfully' });
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: 'Error sending message' });
    }
})


router.get("/:adPostID/:sender/:recipient", async (req, res) => {
    const { adPostID, sender, recipient } = req.params;

    try {
        const messages = await Message.find({ 
            adPostID, 
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

module.exports = router;