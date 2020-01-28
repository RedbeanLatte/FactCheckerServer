module.exports = {
    apps: [
        {
            name: 'PopularVideosUpdater',
            script: './popular-videos-updater.js',
            instances: 1,
            exec_mode: 'fork',
            cron_restart: "* 6 * * *",
            watch: false,
            autorestart: false
        }
    ]
}