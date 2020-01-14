const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const channelStatisticsSchema = new Schema({
    viewCount: String,
    commentCount: String,
    subscriberCount: String,
    hiddenSubscriberCount: Boolean,
    videoCount: String
});

module.exports = mongoose.model('ChannelStatistics', channelStatisticsSchema);