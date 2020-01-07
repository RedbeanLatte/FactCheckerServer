const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Thumbnail = require('./thumbnail');

const videoSnippetSchema = new Schema({
    publishedAt: String,
    channelId: String,
    title: String,
    description: String,
    thumbnails: { type: Map, of: Thumbnail.schema },
    channelTitle: String,
    tags: [String],
    categoryId: String,
    liveBroadcastContent: String,
    localized: { type: Map, of: String },
    defaultAudioLanguage: String
});

module.exports = mongoose.model('VideoSnippet', videoSnippetSchema);