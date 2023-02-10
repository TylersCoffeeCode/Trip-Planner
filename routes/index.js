const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req,res) => res.send('This is root!'))


router.get('/users', controllers.getAllUsers)
router.get('/users/:id', controllers.getUserById)
router.post('/users', controllers.createUser)
router.put('/users/:id', controllers.updateUser)
router.delete('/users/:id', controllers.deleteUser)

router.post('/users/vacations/:id', controllers.createVacation)
router.get('/users/vacations/:id', controllers.getUserIdVacations)
router.put('/users/vacations/:id', controllers.updateUserIdVacation)


module.exports = router