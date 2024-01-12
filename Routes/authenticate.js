const express = require('express')
const { check } = require('express-validator') 
const router = express.Router()
const isAuth = require('../Middleware/is-auth')
const user = require('../Models/user2')

const authenticateController = require('../controller/authenticate')

router.post('/signup',
[check('email').isEmail().withMessage("Enter the rigth email")//.custom((value , {req})=>
// {
//     if(value === 'test9@gmail.com')
//     {
//         throw new Error('this email is banned')
//     }
//     return true
// })
,check('password','invalid password').isLength({min:6})],
authenticateController.signup)


router.post('/login',[check('email').isEmail(),
check('password','invalid password').isLength({min:6})]


,authenticateController.login)

router.get('/',authenticateController.home)
router.get('/loginstatus',authenticateController.loginStatus)
router.post('/postlogin',authenticateController.postLogin)

module.exports = router