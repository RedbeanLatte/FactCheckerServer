const mongoose = require('mongoose')
const Schema = mongoose.Schema

const thumbnailSchema = new Schema({
    url : String,
    width: Number,
    height: Number
  }, { _id : false })

  module.exports = mongoose.model('Thumbnail', thumbnailSchema)