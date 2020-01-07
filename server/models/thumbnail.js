const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const thumbnailSchema = new Schema({
    url : String,
    width: Number,
    height: Number
  });

  module.exports = mongoose.model('Thumbnail', thumbnailSchema);