//Express
const express = require('express');

//Logger - responsible for messages in terminal
const logger = require('morgan');

//Cookie Parser - needed for cookies (authentication)
const cookieParser = require('cookie-parser');

//Cors - needed to accept requests from the outside. Cross origin resource sharing
const cors = require('cors');

//Middleware configuration
module.exports = (app) => {
    //Express should trust the proxy setting
    app.set('trust proxy', 1);

    //Controls a specific header that is passed from the frontend 
    app.use(
        cors({
            credentials: true,
            origin: [`${process.env.DEPLOY_ORIGIN}`, `${process.env.LOCAL_ORIGIN}`],
        })
    );
    
    //Development environment - app logs
    app.use(logger('dev'));

    //Allowing access to 'body' property in requests
    app.use(express.json());
    app.use(express.urlencoded({ extended: false}));
    app.use(cookieParser());
}