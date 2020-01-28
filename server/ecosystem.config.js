module.exports = {
    apps: [
        {
            name: 'FactCheckerServer',
            script: './app.js',
            instances: 1,
            exec_mode: 'fork',
            watch: true,
            autorestart: true
        }
    ]
}