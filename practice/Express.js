const express = require('express')

const app = express();

app.use('/',(req,res,next)=>
{
    res.json({msg:"Hello from express"})
})
app.listen(1500,()=>
{
    console.log("Listning 1500");
})