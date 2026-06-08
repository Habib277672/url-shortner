const express = require('express')
const { handleUserSignUp, handleUserSignIn, handleUserLogout } = require('../controllers/user')

const router = express.Router()

router.post("/", handleUserSignUp)

router.post('/signin', handleUserSignIn)

router.post('/signup', handleUserSignUp)
router.get('/logout', handleUserLogout)

module.exports = router;