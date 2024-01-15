const express = require('express')
const session = require('express-session')
const mongoSessionDB = require('connect-mongodb-session')(session)

const routeSession = require('../Routes/sessionRoute')

const URI = ('mongodb://localhost/testdb')

const store = new mongoSessionDB(
{
    uri:URI,
    collection:'Session Stores'
})

const app = express()

app.use(session(
    {
        secret:'arkam',
        resave: false,
        saveUninitialized : false,
        store:store
    }
))

app.use(routeSession)

app.listen(7000)