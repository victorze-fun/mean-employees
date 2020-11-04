const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require('./models/db')

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/employees', require('./routes/employees'))

module.exports = app
