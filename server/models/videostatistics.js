const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoStatisticsSchema = new Schema({
    viewCount: String,
    likeCount: String,
    dislikeCount: String,
    favoriteCount: String,
    commentCount: String
}, { _id : false })

module.exports = mongoose.model('VideoStatistics', videoStatisticsSchema)