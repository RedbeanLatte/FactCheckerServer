const mongoose = require('mongoose')
const Schema = mongoose.Schema
const VideoSnippet = require('./videosnippet')
const VideoStatistics = require('./videostatistics')

const videoSchema = new Schema({
  kind: String,
  etag: String,
  id: { type: String, unique: true },
  snippet: VideoSnippet.schema,
  statistics: VideoStatistics.schema,
  candidateDescription: String
},
{
  timestamps: true,
  collection: 'videos'
})

// Create Model & Export
module.exports = mongoose.model('Video', videoSchema)