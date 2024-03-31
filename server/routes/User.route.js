const express = require("express")
const router = express.Router()
const mongoose = require('mongoose'); //Import mongoDB


const userSchema = new mongoose.Schema({ email: String, firstName: String, lastName: String, password: String });
const User = mongoose.model('User', userSchema);

router.post("/signup", async (req, res) => {
    console.log("signing up")
    const { email, firstName, lastName, password } = req.body;

    if (!email.endsWith("@torontomu.ca")) {
        return res.status(403).json({ error: 'Invalid email domain' });
    }

    // Todo: check email does not already exist in db
    if ((await User.find({ email: email })).length !== 0) {
        return res.status(403).json({ error: 'Email already being used' });
    }

    console.log(email, firstName, lastName, password)

    if (!email || !firstName || !lastName || !password) {
        return res.status(403).json({ error: 'All fields are required' });
    }

    const salt = await bcrypt.genSalt(10);
    // hashing the password to store in the database
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const newUser = await User.create({email, firstName, lastName, password: hashedPassword})
        return res.status(201).json(newUser);
    } catch {
        return res.sendStatus(500);
    }
})

router.get("/login", async (req, res) => {
    res.send("Logged in")
    const {email, password} = req.query;
    console.log(email, password)
    
    if (!email || !password) {
        return res.status(400).json({ error: 'Title and content are required' });
    }

    try{
        const user = await User.find({email: email, password: password})
        console.log(user)
        return res.json(user)
    } catch{
        return res.status(400);
    }

})

module.exports = router;