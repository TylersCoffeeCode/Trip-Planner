const mongoose = require('mongoose')
const User = require('./user')
const Schema = mongoose.Schema

const Vacation = new Schema(
    {
        user_id: {type: Schema.Types.ObjectId, ref: 'User'},
        location: {type: String, require: true},
        arrivalDate: {type: String, require: true},
        ratings: {type: String, require: true},
        popularHotels: {type: String, require: true},


    }, { timestamps: true }


)

module.exports = mongoose.model('Vacation', Vacation)