const express = require('express');
const app = express();
const data = require('./json_model/model.json');


app.get("/", async (req, res, next) => {
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
});


module.exports = app;

