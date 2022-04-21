// Required Modules
require('dotenv').config()
require('colors')

const express = require('express')
const app = express()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const path = require('path')

// Database
connectDB()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', express.static(path.resolve(__dirname, 'views')))

// Route
app.use('/api/goals', require('./routes/goalRoutes'))

//  Error Handler
app.use(errorHandler)

// Server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`BACKEND SERVER STARTED ON PORT ${PORT}.`))
