const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ChannelSnippet = require('./channelsnippet');
const ChannelStatistics = require('./channelstatistics');

const channelSchema = new Schema({
  kind: String,
  etag: String,
  id: { type: String, unique: true },
  snippet: ChannelSnippet.schema,
  statistics: ChannelStatistics.schema
},
{
  timestamps: true,
  collection: 'channels'
});

// Create Model & Export
module.exports = mongoose.model('Channel', channelSchema);