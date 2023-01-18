const express = require('express');
const router = express.Router()
const userController = require('../controller/userController');

router.post('/create', userController.createUser)
router.get('/:id/verify/:token', userController.verifyUser)
router.post('/login', userController.loginUser)



module.exports = router