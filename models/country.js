const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Country = new Schema(
    {
        country: {type: String, require: true},
        city: {type: String, require: true},
        image: {type: String, require: true}
    },
    { timestamps: true}
)

module.exports = mongoose.model('Country', Country)