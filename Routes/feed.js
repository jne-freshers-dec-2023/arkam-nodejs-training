const express = require('express')

const isAuth = require('../Middleware/auth');

const feedController = require('../controller/feed')

const router = express.Router();

router.get('/', isAuth,feedController.getPosts);
router.post('/' ,feedController.createPost);


module.exports = router;