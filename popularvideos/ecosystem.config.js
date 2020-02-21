module.exports = {
    apps: [
        {
            name: 'PopularVideosUpdater',
            script: './popular-videos-updater.js',
            instances: 1,
            exec_mode: 'fork',
            cron_restart: "0 3,9,15,21 * * *",
            watch: false,
            autorestart: false
        }
    ]
}