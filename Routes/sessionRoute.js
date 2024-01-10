const express = require('express')
const controller = require('../controller/sessionControll')

const router = express.Router()

router.get('/session',controller.sessionController)
router.get('/',controller.home)

router.post('/delete',controller.deleteSession)

module.exports = router
