//Mongoose
const mongoose = require('mongoose');

//MONGO_URI
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/pocketbook';

//Connecting to database
mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(
            `Connected to mongo database: ${x.connections[0].name}`
        );
    })
    .catch((err) => {
        console.error(`Error: ${err}`);
    }); 