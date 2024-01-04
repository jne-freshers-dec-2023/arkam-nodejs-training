const exress = require('express');
const mongoose = require('mongoose')
const loginRoutes = require('../Routes/DBlogin')
const app = exress();

app.use(loginRoutes)

// app.listen(8080,()=>
// {
//     console.log("listning 8080")
// })

mongoose.connect("mongodb://localhost/test").then(
 
).catch(err => console.log(err))
app.listen(8000,() =>{
    console.log("server is listening on port :",8000);
})
