const router = require('express').Router()
const VideoModel = require('../models/video')

router.get('/', async (request, response) => {
    try {
        let result = await VideoModel.find()
        response.setHeader('Content-Type', 'application/json')
        response.send(JSON.stringify(result, undefined, 1))
    } catch (error) {
        response.stataus(500).send(error)
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