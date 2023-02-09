const User = require('../models/user')
const Country = require('../models/country')
const { error } = require('console')

const getAllUsers = async (req,res) => {
    try {
        const users = await new User.find()
        return res.status(200).json({users})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const createUser = async (req,res) => {
    try {
        const users = await new User(req.body)
        await users.save()
        return res.status(201).json({
            user
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
module.exports = {
    getAllUsers,
    createUser
}