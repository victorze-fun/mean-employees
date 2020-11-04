const mongoose = require('mongoose')
const host = process.env.DB_HOST || '127.0.0.1'
const dbURL = `mongodb://${host}/mean-employee`;

mongoose
  .connect(dbURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err))
