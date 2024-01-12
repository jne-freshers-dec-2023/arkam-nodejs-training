const mongoose = require('mongoose')

const user = require('../Models/user.model')

// mongoose.connect("mongodb://localhost/test")

exports.userDeatils = async (req,res,next)=>
{ 
    try{

    console.log("working")
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;  
    let age = req.body.age;  
   
    const user1 = await user.create(
    {
        name: name,
        email:email,
        password:password,
        age: age
    })
    await user1.save()
    res.status(200).json({
    massage:"Post created successfully!!"})
        
    }
    catch(e)
    {
        console.log(e)
    }

    

}