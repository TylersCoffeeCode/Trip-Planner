const db = require('../db')
const Country = require('../models/country')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const countries = [
        { country: "France", capital: "Paris", image: "" },
        { country: "Spain", capital: "Madrid", image: "" },
        { country: "United States", capital: "Washington D.C.", image: "" },
        { country: "Italy", capital: "Rome", image: "" },
        { country: "United Kingdom", capital: "London", image: "" },
        { country: "Thailand", capital: "Bangkok", image: "" },
        { country: "China", capital: "Beijing", image: "" },
        { country: "Germany", capital: "Berlin", image: "" },
        { country: "Mexico", capital: "Mexico City", image: "" },
        { country: "Greece", capital: "Athens", image: "" },
        { country: "Turkey", capital: "Ankara", image: "" },
        { country: "Portugal", capital: "Lisbon", image: "" },
        { country: "Japan", capital: "Tokyo", image: "" },
        { country: "Vietnam", capital: "Hanoi", image: "" },
        { country: "Indonesia", capital: "Jakarta", image: "" },
        { country: "Switzerland", capital: "Bern", image: "" },
        { country: "Czech Republic", capital: "Prague", image: "" },
        { country: "Russia", capital: "Moscow", image: "" },
        { country: "Dominican Republic", capital: "Santo Domingo", image: "" },
        { country: "Australia", capital: "Canberra", image: "" },
        { country: "Netherlands", capital: "Amsterdam", image: "" },
        { country: "India", capital: "New Delhi", image: "" },
        { country: "Canada", capital: "Ottawa", image: "" },
        { country: "Austria", capital: "Vienna", image: "" },
        { country: "Brazil", capital: "Brasília", image: "" },
        { country: "South Africa", capital: "Pretoria", image: "" },
        { country: "Egypt", capital: "Cairo", image: "" },
        { country: "Malaysia", capital: "Kuala Lumpur", image: "" },
        { country: "Iceland", capital: "Reykjavik", image: "" },
        { country: "Hungary", capital: "Budapest", image: "" },
        { country: "Morocco", capital: "Rabat", image: "" },
        { country: "Singapore", capital: "Singapore", image: "" },
        { country: "Croatia", capital: "Zagreb", image: "" },
        { country: "Ireland", capital: "Dublin", image: "" },
        { country: "New Zealand", capital: "Wellington", image: "" },
        { country: "Sweden", capital: "Stockholm", image: "" },
        { country: "Tunisia", capital: "Tunis", image: "" },
        { country: "Turkey", capital: "Ankara", image: "" },
        { country: "Cyprus", capital: "Nicosia", image: "" },
        { country: "Norway", capital: "Oslo", image: "" },
        { country: "Sri Lanka", capital: "Colombo", image: "" },
    ]

    await Country.insertMany(countries)
    console.log('Create Country List')

}

const run = async () => {
    await main()
    db.close()

}

run()