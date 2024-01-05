const { json } = require('body-parser');
const user = require('../Models/user')
const bcrypt = require('bcryptjs') // create hashcode from password
const jwt = require('jsonwebtoken')

module.exports.signup =(req,res,next)=>
{
    const email = req.body.email;
    const name = req.body.name
    const password = req.body.password
   
    bcrypt.hash(password,12)
    .then(hashedPw =>
        {
            const user1 = new user 
            ({
                email: email,
                password: hashedPw,
                name: name
            })

           return user1.save();
        })
        
        .then((result)=>
        {
   

            res.status(201).json({massage: "user created", userId: result.id})
        })

        .catch((err)=>
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
    const email = req.body.email;
    const name = req.body.name
    const password = req.body.password
    let loadUser;

    user.findOne({email:email})
    .then(user=>
        {
            if(!user)
            {
                const error = new Error('Email not exist')
                throw error
            }
            loadUser = user
            return bcrypt.compare(password,user.password)
        })


        .then(isEqual =>
            {
                if(!isEqual)
                {
              const error = new Error("Wrong password")
              error.statusCode  = 401;
              throw error
                }

        const token = jwt.sign
            ({
                email: loadUser.email,
                userId: loadUser._id.toString()
            },'secretsecret',
            {expiresIn:'1h'}
            )
            res.status(200).json({token: token, userId: loadUser._id.toString()})
        })
            
    .catch((err)=>
    {
        if(!err.statusCode)
        {
            err.statusCode = 500;
        }

        next(err)
    })

}

module.exports.verify = (req,res) => {
    return res.json({
        msg: 'User authenticated'
    })
}

module.exports.home= (req,res,next)=>
{
   // console.log("Cockie is:",req.get('Cookie'))
    const loggedIn = req.get('Cookie')
    console.log("Cookie is: ",loggedIn)
 
    return res.json({msg:"Welcome"})
}

module.exports.cookies = (req,res,next)=>
{
    res.setHeader('set-Cookie','loggedIn=true; HttpOnly; Secure;',)
    //req.isLoggedIn = true
    // console.log(req.isLoggedIn);

   res.redirect('/')
}