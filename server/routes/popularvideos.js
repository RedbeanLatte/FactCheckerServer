const router = require('express').Router();
const PopularVideoModel = require('../models/popularvideo');

router.get('/', async (request, response) => {
    try {
        var result = await PopularVideoModel.find();
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify(result, undefined, 2));
    } catch (error) {
        response.stataus(500).send(error);
    }
});

router.post('/', async (request, response) => {
    try {
        var popularVideo = new PopularVideoModel(request.body);
        var result = await popularVideo.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.delete('/', async (request, response) => {
    try {
        var result = await PopularVideoModel.deleteMany({});
        response.send(result);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;