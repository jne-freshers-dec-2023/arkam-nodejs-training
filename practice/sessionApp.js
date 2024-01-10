const express = require('express');
const csrf = require('csurf')

const session = require('express-session')

const mongoSession = require('connect-mongodb-session')(session);

const sessionRoute = require('../Routes/session')

const MONGO_URI = ('mongodb://localhost/test')

const app = express();

const sessionStore = new mongoSession({
    uri:MONGO_URI,
    collection: 'session'
})

const csrfProtection = csrf()

app.use(session(
    {
        secret:'secretkey',
        resave: false, 
        saveUninitialized: false,
        store:sessionStore
    
    }))

app.use(csrfProtection)
app.use(sessionRoute)

app.listen(2200);