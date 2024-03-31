const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

const userRoute = require("./routes/User.route");

// Middleware to parse JSON requests
app.use(express.json());

// Add CORS headers (Only allows our domain to access our server)
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    exposedHeaders: ["Authorization", "newToken"]
}))

app.use("/user", userRoute);


//Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tmu-ads', { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});