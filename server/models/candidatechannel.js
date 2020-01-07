const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ChannelSnippet = require('./channelsnippet');
var ChannelStatistics = require('./channelstatistics');

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
});

// Create Model & Export
module.exports = mongoose.model('CandidateChannel', candidateChannelSchema);