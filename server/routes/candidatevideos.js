require('dotenv').config();

const router = require('express').Router();
const CandidateVideoModel = require('../models/candidatevideo')
const VideoModel = require('../models/video')
const ChannelModel = require('../models/channel')
const request = require('request-promise-native')

router.post('/', async (request, response) => {
    try {
        let videoResult = await getVideo(request.query['videoId'])
        let video = videoResult['items'][0]
        video.candidateDescription = request.query['description']
        
        let channelResult = await ChannelModel.findOne({ id: video.snippet.channelId })
        if (channelResult != undefined) {
            let newVideo = new VideoModel(video)
            let result = await newVideo.save()
            console.log('video added: ' + newVideo.id)
            response.setHeader('Content-Type', 'application/json')
            response.send(JSON.stringify(result, undefined, 1))
        } else {
            let candidateVideo = new CandidateVideoModel(video)
            let result = await candidateVideo.save()
            console.log('candidate video added: ' + candidateVideo.id)
            response.setHeader('Content-Type', 'application/json')
            response.send(JSON.stringify(result, undefined, 1))
        }

    } catch (error) {
        response.status(500).send(error)
    }
});

function getVideo(videoId) {
    let url = new URL('https://www.googleapis.com/youtube/v3/videos')

    let searchParams = new URLSearchParams(url.search)
    searchParams.append('part', 'snippet,statistics')
    searchParams.append('id', videoId)
    searchParams.append('key', process.env.YOUTUBE_API_KEY)

    url.search = searchParams.toString()

    let options = {
        url: url.toString(),
        method: 'GET',
        rejectUnauthorized: false,
        json: true
    }

    return request(options)
}

module.exports = router