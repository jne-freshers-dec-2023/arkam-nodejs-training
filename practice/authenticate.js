const express = require('express')
const routeAuthenticate = require('../Routes/authenticate')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const session = require('express-session')

const app = express()


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//session middlewear
app.use(session({
    secret:'secretkey',
    resave: false,
    saveUninitialized: false
}))

// authentication middleware
app.use(routeAuthenticate)

// Global erro handling
app.use((error,req,res,next)=>
{
    console.log('inside error handling middleware' , error.message)
    return res.status(401).json({msg:error.message})
})

// Mongodb connection
mongoose.connect("mongodb://localhost/testdb")
.then
{
    app.listen(3040,()=>
    {
        console.log('Listning 3030');
    })
}
