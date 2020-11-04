const express = require('express')
const morgan = require('morgan')
require('./models/db')

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'))

app.use('/api/employees', require('./routes/employees'))

module.exports = app
