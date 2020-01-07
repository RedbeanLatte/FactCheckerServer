const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var VideoSnippet = require('./videosnippet');
var VideoStatistics = require('./videostatistics');

const candidateVideoSchema = new Schema({
  kind: String,
  etag: String,
  id: String,
  snippet: VideoSnippet.schema,
  statistics: VideoStatistics.schema,
  candidateDescription: String
},
{
  timestamps: true,
  collection: 'candidatevideos'
});

// Create Model & Export
module.exports = mongoose.model('CandidateVideo', candidateVideoSchema);