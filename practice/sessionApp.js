const express = require('express');

const session = require('express-session')

const mongoSession = require('connect-mongodb-session')(session);

const sessionRoute = require('../Routes/session')

const MONGO_URI = ('mongodb://localhost/test')

const app = express();

const sessionStore = new mongoSession({
    uri:MONGO_URI,
    collection: 'session'
})

app.use(session(
    {
        secret:'secretkey',
        resave: false, 
        saveUninitialized: false,
        store:sessionStore
    
    }))


app.use(sessionRoute)

app.listen(2200);