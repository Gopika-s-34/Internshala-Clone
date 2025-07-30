const mongoose = require("mongoose")
require('dotenv').config()
database = process.env.DATABASE_URL
const url = database
module.exports.connect = () => {
    mongoose.connect(url, console.log("Databse is connected"))
}

// const mongoose = require("mongoose")
// require('dotenv').config()
// const database = process.env.DATABASE_URL
// const url = database
// module.exports.connect = () => {
//     if (!url) {
//         console.error("MongoDB connection string is not defined in environment variables.")
//         process.exit(1)
//     }
//     mongoose.connect(url)
//         .then(() => {
//             console.log("Database is connected")
//         })
//         .catch((err) => {
//             console.error("Database connection error:", err)
//             process.exit(1)
//         })
// }
