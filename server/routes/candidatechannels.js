require('dotenv').config();

const router = require('express').Router();
const CandidateChannelModel = require('../models/candidatechannel');
const request = require('request-promise-native');

router.post('/', async (request, response) => {
    try {
        let channelResult = await getChannel(request.query['channelId'], request.query['userName']);
        let channel = channelResult['items'][0];
        channel.candidateDescription = request.query['description'];
        
        let candidateChannel = new CandidateChannelModel(channel);
        let result = await candidateChannel.save();
        console.log('candidate channel added: ' + candidateChannel.id);
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify(result, undefined, 1));
    } catch (error) {
        response.status(500).send(error);
    }
});

function getChannel(channelId, userName) {
    let url = new URL('https://www.googleapis.com/youtube/v3/channels');
    let searchParams = new URLSearchParams(url.search);
    searchParams.append('part', 'snippet,statistics');
    if (channelId != undefined) {
        searchParams.append('id', channelId);
    }
    if (userName != undefined) {
        searchParams.append('forUsername', userName);
    }
    searchParams.append('key', process.env.YOUTUBE_API_KEY);

    url.search = searchParams.toString();

    let options = {
        url: url.toString(),
        method: 'GET',
        rejectUnauthorized: false,
        json: true
    };

    return request(options);
}

module.exports = router;