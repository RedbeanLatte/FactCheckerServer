const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ChannelSnippet = require('./channelsnippet')
const ChannelStatistics = require('./channelstatistics')

const candidateChannelSchema = new Schema({
  kind: String,
  etag: String,
  id: String,
  snippet: ChannelSnippet.schema,
  statistics: ChannelStatistics.schema,
  candidateDescription: String
},
{
  timestamps: true,
  collection: 'candidatechannels'
})

// Create Model & Export
module.exports = mongoose.model('CandidateChannel', candidateChannelSchema)