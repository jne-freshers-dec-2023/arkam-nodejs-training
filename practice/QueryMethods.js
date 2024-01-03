const mongoose = require('mongoose')

const user = require('../Models/user.model')

mongoose.connect("mongodb://localhost/test")

async function createUsers()
{
    try{
    const jack = await user.create(
    {
        name:'jack',
        email:'jack@gmail.com',
        password:'jack@123',
        age: 22
    })
    await jack.save()
    // console.log(jack)

    // const foundUser = await user.exists({age:23})
    // console.log("Founded User",foundUser);
    
    // const idUser = await user.findById("65954287973b21f9a82557e5")
    // console.log("Founded idUser",idUser);
    
    // const nameUser = await user.findOne({name:'patel'})
    // console.log("Founded nameUser ",nameUser);

    const nameUser = await user.where("name").equals("jack")
    console.log("Founded nameUser ",nameUser);
    
}
catch(err)
{
    console.log(err);
}
}
createUsers()