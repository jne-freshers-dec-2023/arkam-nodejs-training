const express = require('express')

const sessionController = require('../controller/session')

const router = express.Router()

router.get('/session',sessionController.getSession)
router.get('/',sessionController.home)

module.exports = router