const router = require('express').Router()
const ChannelModel = require('../models/channel')

router.get('/', async (request, response) => {
    try {
        let result = await ChannelModel.find()
        response.setHeader('Content-Type', 'application/json')
        response.send(JSON.stringify(result, undefined, 1))
    } catch (error) {
        response.stataus(500).send(error)
    }
});

router.get('/:id', async (request, response) => {
    try {
        let result = await ChannelModel.findOne({ id: request.params.id })
        response.setHeader('Content-Type', 'application/json')
        response.send(JSON.stringify(result, undefined, 1))
    } catch (error) {
        response.status(500).send(error)
    }
});

module.exports = router