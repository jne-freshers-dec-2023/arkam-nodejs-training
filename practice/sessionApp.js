const express = require('express');

const session = require('express-session')

const mongoSession = require('connect-mongodb-session')(session);

const sessionRoute = require('../Routes/session')

const app = express();

app.use(session({secret:'secretkey',resave: false, saveUninitialized: false}))

const MONGO_URI = ('mongo://localhost/test')

const sessionStore = new mongoSession({
    uri:MONGO_URI
})

app.use(sessionRoute)

app.listen(2200);