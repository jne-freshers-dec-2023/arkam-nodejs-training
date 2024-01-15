import express from 'express'
import app3Controller from './app3Controller'
import {check} from 'express-validator'
const router = express.Router()

router.post('/signup',check('email').isEmail(),app3Controller.signup)
router.post('/login',app3Controller.login)

export default router
