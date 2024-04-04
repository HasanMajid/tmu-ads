const express = require("express")
const router = express.Router()
const mongoose = require('mongoose'); //Import mongoDB
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


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
        const newUser = await User.create({ email, firstName, lastName, password: hashedPassword })
        return res.status(201).json(newUser);
    } catch {
        return res.sendStatus(500);
    }
})

router.get("/login", async (req, res) => {
    const { email, password } = req.query;
    console.log("checking logging in user");

    if (!email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }


    try {
        //User could be empty, so need to check with if statement
        const user = (await User.find({ email: email }))[0]
        console.log(user)
        if (user) {
            const isCorrectPassword = bcrypt.compare(password, user.password);
            if (isCorrectPassword) {
                return res.json(user)
            } else {
                return res.status(400).json({ error: "Wrong Password" })
            }
        } else {
            return res.status(400).json({ error: "Email does not exist." })
        }
    } catch {
        console.log("error logging in user")
        return res.status(400);
    }

})


// Fetch all users
router.get("/users", async (req, res) => {
    console.log("fetching all users");

    try {
        User.find({}).then(data => {
            return res.json(data)
        }).catch(err => {
            return res.status(408).json({ message: err.message })
        })
    } catch {
        console.log("error logging in user")
        return res.status(400);
    }

})


//TODO: Delete selected user based on email
router.post("/delete", async (req, res)=>{
    const { email } = req.body;
    console.log("deleting user")

    try{
        await User.deleteOne({email: email})
        return res.status(201).json({ message: "User successfully deleted" })
    }catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Error deleting user' });
    }
})

module.exports = router;