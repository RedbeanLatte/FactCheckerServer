const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const channelStatisticsSchema = new Schema({
    viewCount: String,
    commentCount: String,
    subscriberCount: String,
    hiddenSubscriberCount: Boolean,
    videoCount: String
});

module.exports = mongoose.model('ChannelStatistics', channelStatisticsSchema);