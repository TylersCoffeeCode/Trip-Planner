const db = require('../db')
const Country = require('../models/country')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const countries = [
        {country: 'Japan', city: 'Tokyo', image: 'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk0OTU3Mjc5NTE3MjIyMDUw/gettyimages-1390815938.jpg'},

    ]

    await Country.insertMany(countries)
    console.log('Create Country List')

}

const run = async () => {
    await main()
    db.close()

}

run()