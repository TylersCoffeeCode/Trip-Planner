const mongoose = require('mongoose')
const User = require('./user')
const Schema = mongoose.Schema

const Vacation = new Schema(
    {
        user_id: {type: Schema.Types.ObjectId, ref: 'User'},
        numberOfTravelers: {type: String, required: true},
        location: {type: String, required: true},
        questionOne: {type: String, required: true},
        questionTwo: {type: String, required: true},
        questionThree: {type: String, required: true},
        extraInfo: {type: String, required: true},


    }, { timestamps: true }


)

module.exports = mongoose.model('Vacation', Vacation)