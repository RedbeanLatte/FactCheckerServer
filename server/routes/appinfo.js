const router = require('express').Router()

const APP_VERSION_TABLE = new Map(
    [
        ['com.redbeanlatte11.factchecker', '1.0.4'],
        ['com.redbeanlatte11.garim', '1.0.0']
    ]
)

router.get('/', async (request, response) => {
    try {
        let applicationId = request.query['applicationId']
        let appInfo = {
            appVersion: APP_VERSION_TABLE.get(applicationId)
        }
        response.setHeader('Content-Type', 'application/json')
        response.send(JSON.stringify(appInfo, undefined, 1))
    } catch (error) {
        response.stataus(500).send(error)
    }
})

module.exports = router