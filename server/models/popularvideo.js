const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var VideoSnippet = require('./videosnippet');
var VideoStatistics = require('./videostatistics');

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