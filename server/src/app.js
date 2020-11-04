const express = require('express')
const logger = require('morgan')
require('./models/db')

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/employees', require('./routes/employees'))

module.exports = app
