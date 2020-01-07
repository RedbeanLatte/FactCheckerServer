// ENV
require('dotenv').config();
// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 4500;

// Static File Service
app.use(express.static('public'));
app.use(express.json());

// ROUTERS
app.use('/videos', require('./routes/videos'));
app.use('/popularvideos', require('./routes/popularvideos'));
app.use('/candidatevideos', require('./routes/candidatevideos'));
app.use('/channels', require('./routes/channels'));
app.use('/candidatechannels', require('./routes/candidatechannels'));

// Node.js의 native Promise 사용
mongoose.Promise = global.Promise;

// CONNECT TO MONGODB SERVER
mongoose.connect(process.env.MONGO_URI, {})
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

app.listen(port, () => console.log(`Server listening on port ${port}`));