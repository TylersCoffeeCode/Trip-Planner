const mongoose = require('mongoose')
const User = require('./user')
const Schema = mongoose.Schema

const Vacation = new Schema(
    {
        user_id: {type: Schema.Types.ObjectId, ref: 'User'},
        numberOfTravelers: {type: String, required: true},
        location: {type: String, required: true},
        activities: {type: Array, required: true},
        extraInfo: {type: String, required: true},


    }, { timestamps: true }


)

module.exports = mongoose.model('Vacation', Vacation)