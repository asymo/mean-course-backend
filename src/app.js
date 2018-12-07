const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

// Connect to database
mongoose.connect('mongodb+srv://mean_course:aCbZl4AjwEx91KWg@cluster0-xga4s.mongodb.net/node-angular?retryWrites=true', { useNewUrlParser: true })
    .then(() => {
        console.log('Connect to Database!');
    })
    .catch(() => {
        console.log('Database connection failed!');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.post('/api/posts', (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save();
    console.log(post);
    res.status(201).json({
        message: 'Post added correctly'
    });
});

app.get('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: 'sdfghseh98',
            title: 'First server post',
            content: 'This is the first post from the server'
        },
        {
            id: 'ngfhtuy38d',
            title: 'Second server post',
            content: 'This is the first post from the server!'
        }
    ];
    res.status(200).json({
        message: 'Posts fetched successfully',
        posts: posts
    });
});

module.exports = app;