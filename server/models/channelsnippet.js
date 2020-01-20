const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Thumbnail = require('./thumbnail')

const channelSnippetSchema = new Schema({
    title: String,
    description: String,
    customUrl: String,
    publishedAt: String,
    thumbnails: { type: Map, of: Thumbnail.schema },
    localized: { type: Map, of: String },
    country: String
})

module.exports = mongoose.model('ChannelSnippet', channelSnippetSchema)