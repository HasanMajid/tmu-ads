const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

// Middleware to parse JSON requests
app.use(express.json());
// Enable CORS for all origins
app.use(cors());

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true });
// const postSchema = new mongoose.Schema({ title: String, content: String });
// const Post = mongoose.model('Post', postSchema);

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});