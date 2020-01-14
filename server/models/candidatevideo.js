const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VideoSnippet = require('./videosnippet');
const VideoStatistics = require('./videostatistics');

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