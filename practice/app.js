const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const authRoute = require('../Routes/auth')

const app = express();

app.use(bodyParser.json())

app.use((req,res, next)=>
{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Method','GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');

    next()
}) 

// app.use(feedRoute)
app.use(authRoute) 


mongoose.connect("mongodb://localhost/test").then( (result)=>
{ 
    app.listen(6060)
    console.log("listning");
}).catch(err=>
    {
        console.log(err);
    })

