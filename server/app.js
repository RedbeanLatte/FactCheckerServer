// ENV
require('dotenv').config()

// [LOAD PACKAGES]
const express = require('express')
const mongoose = require('mongoose')

const app = express()
// [CONFIGURE SERVER PORT]
const port = process.env.PORT || 4500

// [STATIC FILE SERVICE]
app.use(express.static('public'))
app.use(express.json())

// [CONFIGURE ROUTER]
app.use('/videos', require('./routes/videos'))
app.use('/popularvideos', require('./routes/popularvideos'))
app.use('/candidatevideos', require('./routes/candidatevideos'))
app.use('/channels', require('./routes/channels'))
app.use('/candidatechannels', require('./routes/candidatechannels'))
app.use('/appinfo', require('./routes/appinfo'))

// Use native promise
mongoose.Promise = global.Promise

// CONNECT TO MONGODB SERVER
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e))

  // [RUN SERVER]
app.listen(port, () => console.log(`Server listening on port ${port}`))