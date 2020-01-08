const router = require('express').Router();
const CandidateChannelModel = require('../models/candidatechannel');
var request = require('request-promise-native');

router.post('/', async (request, response) => {
    try {
        var channelResult = await getChannel(request.query['channel_id'], request.query['user_name']);
        var channel = channelResult['items'][0];
        channel.candidateDescription = request.query['description'];
        
        var candidateChannel = new CandidateChannelModel(channel);
        var result = await candidateChannel.save();
        console.log('candidate channel added: ' + candidateChannel.id);
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify(result, undefined, 1));
    } catch (error) {
        response.status(500).send(error);
    }
});

function getChannel(channelId, userName) {
    var url = new URL('https://www.googleapis.com/youtube/v3/channels');
    const API_KEY = 'AIzaSyDP8YCIYoF6zlkcbhiodbW07lQAumrK1AA'

    var searchParams = new URLSearchParams(url.search);
    searchParams.append('part', 'snippet,statistics');
    if (channelId != undefined) {
        searchParams.append('id', channelId);
    }
    if (userName != undefined) {
        searchParams.append('forUsername', userName);
    }
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