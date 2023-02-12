const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const User = require('../models/user')

router.get('/', (req, res) => res.send('This is root!'))


router.get('/users', controllers.getAllUsers)
router.get('/users/:id', controllers.getUserById)
// router.post('/users', controllers.createUser)

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    User.findOne({ email }, (error, email) => {
        if (!email) {
            return res.status(400).json({ message: 'email not found' })
        } else if (email.password !== password) {
            return res.status(400).json({ message: 'Your password is incorrect' })
        } else if (email.password === password) {
            res.status(200).json({ message: 'Login successful' })
        }
    });
})


router.post('/createUser', async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({
            user
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
})

router.put('/users/:id', controllers.updateUser)
router.delete('/users/:id', controllers.deleteUser)

router.post('/users/vacations/:id', controllers.createVacation)
router.get('/users/vacations/:id', controllers.getUserIdVacations)
router.put('/users/vacations/:id', controllers.updateUserIdVacation)


module.exports = router