const db = require('../db')
const Country = require('../models/country')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const countries = [
        { country: "France", city: "Paris", image: "" },
        { country: "Spain", city: "Madrid", image: "" },
        { country: "United States", city: "Washington D.C.", image: "" },
        { country: "Italy", city: "Rome", image: "" },
        { country: "United Kingdom", city: "London", image: "" },
        { country: "Thailand", city: "Bangkok", image: "" },
        { country: "China", city: "Beijing", image: "" },
        { country: "Germany", city: "Berlin", image: "" },
        { country: "Mexico", city: "Mexico City", image: "" },
        { country: "Greece", city: "Athens", image: "" },
        { country: "Turkey", city: "Ankara", image: "" },
        { country: "Portugal", city: "Lisbon", image: "" },
        { country: "Japan", city: "Tokyo", image: "" },
        { country: "Vietnam", city: "Hanoi", image: "" },
        { country: "Indonesia", city: "Jakarta", image: "" },
        { country: "Switzerland", city: "Bern", image: "" },
        { country: "Czech Republic", city: "Prague", image: "" },
        { country: "Russia", city: "Moscow", image: "" },
        { country: "Dominican Republic", city: "Santo Domingo", image: "" },
        { country: "Australia", city: "Canberra", image: "" },
        { country: "Netherlands", city: "Amsterdam", image: "" },
        { country: "India", city: "New Delhi", image: "" },
        { country: "Canada", city: "Ottawa", image: "" },
        { country: "Austria", city: "Vienna", image: "" },
        { country: "Brazil", city: "Brasília", image: "" },
        { country: "South Africa", city: "Pretoria", image: "" },
        { country: "Egypt", city: "Cairo", image: "" },
        { country: "Malaysia", city: "Kuala Lumpur", image: "" },
        { country: "Iceland", city: "Reykjavik", image: "" },
        { country: "Hungary", city: "Budapest", image: "" },
        { country: "Morocco", city: "Rabat", image: "" },
        { country: "Singapore", city: "Singapore", image: "" },
        { country: "Croatia", city: "Zagreb", image: "" },
        { country: "Ireland", city: "Dublin", image: "" },
        { country: "New Zealand", city: "Wellington", image: "" },
        { country: "Sweden", city: "Stockholm", image: "" },
        { country: "Tunisia", city: "Tunis", image: "" },
        { country: "Turkey", city: "Ankara", image: "" },
        { country: "Cyprus", city: "Nicosia", image: "" },
        { country: "Norway", city: "Oslo", image: "" },
        { country: "Sri Lanka", city: "Colombo", image: "" },
    ]

    await Country.insertMany(countries)
    console.log('Create Country List')

}

const run = async () => {
    await main()
    db.close()

}

run()