const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VideoSnippet = require('./videosnippet');
const VideoStatistics = require('./videostatistics');

const popularVideoSchema = new Schema({
  kind: String,
  etag: String,
  id: String,
  snippet: VideoSnippet.schema,
  statistics: VideoStatistics.schema
},
{
  timestamps: true,
  collection: 'popularvideos'
});

// Create Model & Export
module.exports = mongoose.model('PopularVideo', popularVideoSchema);