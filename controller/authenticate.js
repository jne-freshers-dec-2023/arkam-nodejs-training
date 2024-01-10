const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const user = require('../Models/user2')
const { json } = require('body-parser');

module.exports.signup = (req,res,next)=>
{
    //throw new Error('Dummy') error handling middleware
    const email = req.body.email
    const name = req.body.name
    const pass = req.body.password

    user.findOne({email:email})

    .then(newUser =>
    {
        if(!newUser.isEmpty)
        {
            console.log('email already exists!')
           throw new Error('email already exists!')
        }
    })
   .catch((err)=>
   {
    err.statusCode(502);
    return next(err)
   })
 
    bcrypt.hash(pass,12)

    .then((hashPass)=>
    {
    const user1 = new user
    ({
        email: email,
        name: name,
        password: hashPass
    })
    user1.save()

    if(!user1)
    {
        console.log("unable to craete user")
        return res.status(402).json({msg:'user not created'})
    }
    })

    .then((createdUser)=>
    {
        console.log('redirecting to /');
        res.redirect('/')
        // res.status(201).json({msg:'user created', userId:createdUser.userId})
    })

    .catch(err =>
    {
        if(!err.statusCode)
        {
            err.statusCode = 500;
        }
        next(err)
    })
}

module.exports.login = (req,res,next)=>
{
    const email = req.body.email
    const password = req.body.password

    // throw new Error('Dummy');
    user.findOne({email:email})
    .then(user=>
    {
        if(!user)
        {
            console.log('user not found!')
            return res.statusCode(401).json({msg:'user not found!'})
        }
        bcrypt.compare(password,user.password)
        {
            req.session.isLoggedIn = true
            res.redirect('/postlogin')
        }

        
    })
    .catch(err=>
    {
        // err.httpStatusCode = 500;
        // return next(err)
        console.log('findOne failed')
        throw new Error(err)
    })

}

module.exports.home = (req,res,next)=>
{
    res.status(201).json({msg:'user created successfully!'})
}

module.exports.postLogin = (req,res,next)=>
{
    const session = req.session.isLoggedIn
    if(!session)
    {
        res.status(401).json({msg:'user is not logged in'})
    }

    res.status(201).json({msg:'user logged in successfully!'})
}
