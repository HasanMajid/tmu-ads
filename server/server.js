const express = require("express");
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const port = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const userRoute = require("./routes/User.route");
const adPostRoute = require("./routes/AdPost.route");
const messageRoute = require("./routes/Message.route");

// Middleware to parse JSON requests
app.use(express.json());

// Add CORS headers (Only allows our domain to access our server)
app.use(cors({
    // origin: ["http://localhost:5173", "*"],
    credentials: true,
    exposedHeaders: ["Authorization", "newToken"]
}))

app.use("/user", userRoute);
app.use("/adpost", adPostRoute);
app.use("/message", messageRoute);

// Middleware
app.use((req, res, next) => {
    res.io = io;
    next();
});

let uri;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
    console.log('dev mode')
    uri = process.env.DEV_URI;
} else {
    console.log('prod mode')
    uri = process.env.URI;
    console.log(uri)
}

//Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});