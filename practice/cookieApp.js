const express = require('express')

const cookieRoute = require('../Routes/cookie')
const app = express();

app.use(cookieRoute)

app.listen(2000,()=>
{
    console.log('listning 2000');
})