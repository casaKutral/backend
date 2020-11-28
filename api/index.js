const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const workshops = require('./routes/workshops')
const users = require('./routes/users')
const teachers = require('./routes/teachers')

const app = express()

app.use(bodyParser.json())
app.use(cors())

// //conectarse a la base de datos
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

//ROUTES
app.use('/api/workshops', workshops)
app.use('/api/users', users)
app.use('/api/teachers', teachers)

module.exports = app