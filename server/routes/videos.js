const router = require('express').Router();
const VideoModel = require('../models/video');

router.get('/', async (request, response) => {
    try {
        var result = await VideoModel.find();
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify(result, undefined, 1));
    } catch (error) {
        response.stataus(500).send(error);
    }
});

module.exports = router;