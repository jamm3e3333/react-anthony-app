const express = require('express');
const cors = require('cors');
const app = express();
const processData = require('./utils/processData');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>hello from express server</h1>");
});

app.get('/monitor/data', cors(), (req, res) => {
    const data = processData();
    res.send({
        data
    })
    .status(200);
})

module.exports = app;

