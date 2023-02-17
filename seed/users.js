const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const users = [
        {firstName: "Tyler", lastName: "Coats", email: 'coatsctyler@gmail.com', password: 'password123'}
    ]

    await User.insertMany(users)
}

const run = async () => {
    await main()
    db.close()
}

run()