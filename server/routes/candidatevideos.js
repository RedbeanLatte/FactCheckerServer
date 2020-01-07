const router = require('express').Router();
const CandidateVideoModel = require('../models/candidatevideo');
const VideoModel = require('../models/video')
var request = require('request-promise-native');

router.post('/', async (request, response) => {
    try {
        var videoResult = await getVideo(request.query['video_id']);
        var video = videoResult['items'][0];
        video.candidateDescription = request.query['description'];
        
        var candidateVideo = new CandidateVideoModel(video);
        var result = await candidateVideo.save();
        console.log('candidate video added: ' + candidateVideo.id);
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify(result, undefined, 2));
    } catch (error) {
        response.status(500).send(error);
    }
});

function getVideo(videoId) {
    var url = new URL('https://www.googleapis.com/youtube/v3/videos');
    const API_KEY = 'AIzaSyDP8YCIYoF6zlkcbhiodbW07lQAumrK1AA'

    var queryString = url.search;

    var searchParams = new URLSearchParams(queryString);
    searchParams.append('part', 'snippet,statistics');
    searchParams.append('id', videoId);
    searchParams.append('key', API_KEY);

    url.search = searchParams.toString();

    var newUrl = url.toString();
    var options = {
        url: newUrl,
        method: 'GET',
        rejectUnauthorized: false,
        json: true
    };

    return request(options);
}

module.exports = router;