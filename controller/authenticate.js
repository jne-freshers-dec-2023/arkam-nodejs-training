const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const user = require('../Models/user2')
const { json } = require('body-parser')

const {check, validationResult} = require('express-validator')

module.exports.signup = async(req,res,next)=>
{
    try {

    //throw new Error('Dummy') //error handling middleware
    const email = req.body.email
    const name = req.body.name
    const password = req.body.password
    const errors = validationResult(req)

    if(!errors.isEmpty())
    {
        const err = Error('validation failed')
        err.statusCode = 422;
        throw err;
    }
    const findUser = await user.findOne({email:email})

    if(findUser)
        {
           throw new Error('email already exists!')
        }
   
    const hashPass = await bcrypt.hash(password,12)
    
    const user1 = new user
    ({
        email: email,
        name: name,
        password: hashPass
    })
    const savedData = await user1.save()

    if(!savedData)
    {
        throw new Error('Unable to create user')
    }

   return res.redirect('/')
}
catch(err) 
{
    next(err)
}
}



module.exports.login = async (req,res,next)=>
{
   try{
    const email = req.body.email
    const password = req.body.password

    // throw new Error('Dummy');
   const foundUser = await user.findOne({email:email})
  
        if(!foundUser)
        {
            console.log('user not found!')
            const err = new Error('User not found')
            err.statusCode = 400;
            throw err
        }
        const comparedPass = bcrypt.compare(password,foundUser.password)
        if(!comparedPass)
        {
            const err = new Error('Password is wrong')
            err.statusCode = 400;
            throw err
        }

        const token = jwt.sign({
            email: foundUser.email,
            password: foundUser.password,
            userId: foundUser.userId
        },'arkam',{expiresIn :'1h'})

        req.session.token = token
        console.log(token)
        req.session.isLoggedIn = true
        res.redirect('/loginstaus')
    }
    catch(err)
    {  
       next(err)
    }

}

module.exports.postLogin = async (req,res,next)=>
{
   try{
    const email = req.body.email
    const password = req.body.password

    // throw new Error('Dummy');
   const foundUser = await user.findOne({email:email})
  
        if(!foundUser)
        {
            console.log('user not found!')
            const err = new Error('User not found')
            err.statusCode = 400;
            throw err
        }
        const comparedPass = bcrypt.compare(password,foundUser.password)
        if(!comparedPass)
        {
            const err = new Error('Password is wrong')
            err.statusCode = 400;
            throw err
        }

    
        req.session.isLoggedIn = true
        res.redirect('/loginstatus')
    }
    catch(err)
    {  
       next(err)
    }

}

module.exports.home = (req,res,next)=>
{
    res.status(201).json({msg:'user created successfully!'})
}

module.exports.loginStatus = (req,res,next)=>
{
    const session = req.session.isLoggedIn
    if(!session)
    {
        res.status(401).json({msg:'user is not logged in'})
    }

    res.status(201).json({msg:`user logged in successfully! with 
    token: ${req.session.token}`})
}
