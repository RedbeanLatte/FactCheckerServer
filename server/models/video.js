const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var VideoSnippet = require('./videosnippet');
var VideoStatistics = require('./videostatistics');

const videoSchema = new Schema({
  kind: String,
  etag: String,
  id: { type: String, unique: true },
  snippet: VideoSnippet.schema,
  statistics: VideoStatistics.schema
},
{
  timestamps: true,
  collection: 'videos'
});

// Create Model & Export
module.exports = mongoose.model('Video', videoSchema);