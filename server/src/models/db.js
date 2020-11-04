const mongoose = require('mongoose')
const host = process.env.DB_HOST || '127.0.0.1'
const dbURL = `mongodb://${host}/Loc8r`;

mongoose
  .connect(dbURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err))
