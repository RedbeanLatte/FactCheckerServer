const router = require('express').Router()
const VideoModel = require('../models/video')

router.get('/', async (request, response) => {
    try {
        let offset = request.query['offset']
        let limit = request.query['limit']
        let watchedChannelIds = request.query['watchedChannelIds']

        console.log('watchedChannelIds: ' + watchedChannelIds)

        let result;
        if (offset != undefined && limit != undefined) {
            result = await VideoModel.find()
                                    .in('snippet.channelId', ['UCtm_QoN2SIxwCE-59shX7Qg'])
                                    .skip(parseInt(offset))
                                    .limit(parseInt(limit))
            console.log('result: ' + result)
        } else {
            result = await VideoModel.find()
                                    .in('snippet.channelId', [])
        }
        response.setHeader('Content-Type', 'application/json')
        response.send(JSON.stringify(result, undefined, 1))
    } catch (error) {
        response.status(500).send(error)
    }
});

router.get('/:id', async (request, response) => {
    try {
        let result = await VideoModel.findOne({ id: request.params.id })
        response.setHeader('Content-Type', 'application/json')
        response.send(JSON.stringify(result, undefined, 1))
    } catch (error) {
        response.status(500).send(error)
    }
});

module.exports = router