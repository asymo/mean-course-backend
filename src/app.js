const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');

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
app.use('/images', express.static('images'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/api/posts', postsRoutes);

module.exports = app;