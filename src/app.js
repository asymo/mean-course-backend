const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
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