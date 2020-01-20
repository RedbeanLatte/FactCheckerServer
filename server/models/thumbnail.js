const mongoose = require('mongoose')
const Schema = mongoose.Schema

const thumbnailSchema = new Schema({
    url : String,
    width: Number,
    height: Number
  })

  module.exports = mongoose.model('Thumbnail', thumbnailSchema)