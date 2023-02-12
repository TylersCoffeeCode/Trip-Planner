const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const User = require('../models/user')

router.get('/', (req, res) => res.send('This is root!'))


router.get('/users', controllers.getAllUsers)
router.get('/users/:id', controllers.getUserById)
// router.post('/users', controllers.createUser)
router.get('/users/email/:email', controllers.getUserById)


router.post('/login', async (req, res) => {
    const { email, password } = req.body
    User.findOne({ email }, (error, user) => {
        if (!user) {
            return res.status(401).json({ message: 'Email not found' })
        } else if (user.password !== password) {
            return res.status(402).json({ message: 'Your password is incorrect' })
        } else if (user.password === password) {
            res.status(200).json({ message: 'Login successful', id: user._id })
        }
    });
})


router.post('/createUser', async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({
            user, message: 'User Created'
        })
    } catch (e) {
        return res.status(500).json({message: 'Error occured'})
    }
})

router.put('/users/:id', controllers.updateUser)
router.delete('/users/:id', controllers.deleteUser)

router.post('/users/vacations/:id', controllers.createVacation)
router.get('/users/vacations/:id', controllers.getUserIdVacations)
router.put('/users/vacations/:id', controllers.updateUserIdVacation)


module.exports = router