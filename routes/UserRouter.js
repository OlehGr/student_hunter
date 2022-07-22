const Router = require('express');
const router = new Router;
const UserController = require('../controllers/UserController')
const authMidaleware = require('../midleware/authMidaleware')

router.post('/reg', UserController.register)
router.post('/login', UserController.login)
router.get('/auth', authMidaleware, UserController.checkAuth)
router.get('/email', UserController.checkEmail)
router.get('/phone', UserController.checkPhone)



module.exports = router;