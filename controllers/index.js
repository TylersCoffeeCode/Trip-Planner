const User = require('../models/user')
const Country = require('../models/country')
const Vacation = require('../models/vacation')


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({ users })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const users = await User.findById(id)
        return res.status(200).json({ users })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params
        const users = await User.findOne(email)
        return res.status(200).json({ users })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createUser = async (req, res) => {
    try {
        const users = await new User(req.body)
        await users.save()
        return res.status(201).json({
            users
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("User Deleted")
        }
        throw new Error("User Not Found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createVacation = async (req, res) => {
    try {
        console.log(req.body)
        const { id } =  req.params
        const { numberOfTravelers, location, questionOne, questionTwo, questionThree, freeForm } = req.body
        // req.body = { ...req.body, user_id: id }

        const vacations = await new Vacation({
            user_id: id,
            numberOfTravelers,
            location,
            questionOne,
            questionTwo,
            questionThree,
            extraInfo: freeForm,
        })
        await vacations.save()
        return res.status(200).json({
            vacations
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getUserIdVacations = async (req, res) => {
    try {
        const { id } = req.params
        const vacations = await Vacation.find({user_id: id})
        return res.status(200).json(vacations)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateUserIdVacation = async (req, res) => {
    try {
        const { id } = req.params
        const vacation = await Vacation.findByIdAndUpdate(id, req.body,{new: true} )
        return res.status(200).json(vacation)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}








module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createVacation,
    getUserIdVacations,
    updateUserIdVacation,
    getUserByEmail
}