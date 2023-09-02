// application configuration
const express =require('express');
const app = new express();
const router = require('./src/Routes/api');

//application router
app.use('/api', router);

module.exports = app;