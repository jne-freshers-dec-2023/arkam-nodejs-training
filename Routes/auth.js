const express = require('express')
import { check } from 'express-validator';

const authController = require('../controller/auth')
const { middleware } = require('../Middleware/auth')
// const { authMiddleware } = require('../Middleware/middleware')


const router = express.Router()

router.put('/signup',check('email').isEmail(),authController.signup)

router.post('/login',authController.login)

router.get('/',authController.home)

router.get('/login-cookie',authController.cookies)

router.get('/verify', middleware,authController.verify)


module.exports = router