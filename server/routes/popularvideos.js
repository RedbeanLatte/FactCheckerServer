const router = require('express').Router();
const PopularVideoModel = require('../models/popularvideo');

router.get('/', async (request, response) => {
    try {
        let result = await PopularVideoModel.find();
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify(result, undefined, 1));
    } catch (error) {
        response.stataus(500).send(error);
    }
});

router.post('/', async (request, response) => {
    try {
        let popularVideo = new PopularVideoModel(request.body);
        let result = await popularVideo.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.delete('/', async (request, response) => {
    try {
        let result = await PopularVideoModel.deleteMany({});
        response.send(result);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;