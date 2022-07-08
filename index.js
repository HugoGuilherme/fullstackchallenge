//server.js
const express = require('express')
const app = express()
const routes = require('./routes/veiculoRoutes');
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(routes)

module.exports = app;