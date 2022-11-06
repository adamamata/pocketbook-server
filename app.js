//Allowing access to environment variables
require('dotenv/config');

//Connect to database
require('./db');

//Handling express
const express = require('express');
const app = express(); 

//Middleware
require('./config')(app);

//Route handling 
//All routes
const allRoutes = require('./routes/index.routes');
app.use('/', allRoutes);

//Export app
module.exports = app;