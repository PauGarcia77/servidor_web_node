require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Server is tab2</h1>");
});

module.exports = app;