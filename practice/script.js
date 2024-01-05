const mongoose = require('mongoose')
const User = require('../Models/user.model')

mongoose.connect("mongodb://localhost/test")


async function run()
{
try{
const User1 = await User.create
({
    name: 'arkam',
    email:'arkam@gmail.com', 
    password:'arkampatel', 
    age:19
})
User1.email = 'patel@gmail.com'
await User1.save()
console.log(User1)

const User2 = await User.create
({
    name:'patel',
    email:'hh@gmail.com', 
    password:'arkampatel', 
    age:23
})
User2.email = 'patel2@gmail.com'
await User2.save()
console.log(User2)
}

catch(e)
{
 console.log(e)
}
}
run()