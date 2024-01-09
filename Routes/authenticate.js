const express = require('express')

import { check } from 'express-validator';

const router = express.Router()

const authenticateController = require('../controller/authenticate')

router.post('/sigup',check('email').isEmail(),authenticateController.sigup)

module.exports = router