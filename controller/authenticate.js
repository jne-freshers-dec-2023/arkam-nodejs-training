const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const user = require('../Models/user2')

import { check } from 'express-validator';
import { validationResult } from check;


module.exports.sigup = (req,res,next)=>
{
    const email = req.body.email
    const name = req.body.name
    const pass = req.body.password
    const err = validationResult(req)
    if(!err.isEmpty)
    {
        return res.statusCode(402).json({msg:'validation failed'})
    }
    bcrypt.hash(pass,12)

    .then((hashPass)=>
    {
    
    const user1 = new user =
    {
        email: email,
        name: name,
        password: hashPass
    }
    return user1.save()
    })
    .then(createdUser=>
    {
        res.status(201).json({msg:'user created', userId:createdUser.userId})
    })
    .catch(err)
    {
        if(!err.statusCode)
        {
            err.statusCode = 500;
        }
        next(err)
    }
}