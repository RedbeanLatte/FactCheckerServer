require('dotenv').config();

const request = require('request-promise-native');

const API_URL = 'https://www.googleapis.com/youtube/v3/videos';

const nextPageTokens = Array();

execute();

async function execute() {
    await deleteAll();
    let nextPageToken = '';
    do {
        nextPageToken = await updatePopularVideos(nextPageToken);
    } while (nextPageToken != undefined)
}

async function deleteAll() {
    let options = {
        url: 'http://10.253.57.208:4500/popularvideos',
        method: 'DELETE',
        rejectUnauthorized: false,
        proxy: 'http://168.219.61.252:8080'
    };

    try {
        let result = await request(options);
        console.log('success to deleteAll');
    } catch (error) {
        console.log(error);
    }
}

async function updatePopularVideos(nextPageToken) {
    console.log('updatePopularVideos(), nextPageToken: ' + nextPageToken);
    if (nextPageTokens.includes(nextPageToken) || nextPageToken == undefined) {
        return;
    }
    nextPageTokens.push(nextPageToken);

    var url = new URL(API_URL);
    var searchParams = new URLSearchParams(url.search);
    searchParams.append('part', 'snippet,statistics');
    searchParams.append('chart', 'mostPopular');
    searchParams.append('maxResults', '50');
    searchParams.append('regionCode', 'KR');
    searchParams.append('key', process.env.YOUTUBE_API_KEY);
    if (nextPageToken != '') {
        searchParams.append('pageToken', nextPageToken);
    }
    
    url.search = searchParams.toString();
    
    console.log(newUrl);
    let options = {
        url: url.toString(),
        method: 'GET',
        rejectUnauthorized: false,
        json: true
    };

    try {
        result = await request(options);
        popularVideos = result['items'];
            popularVideos.forEach(element => {
                updatePopularVideo(element);
            });
        return result['nextPageToken'];
    } catch (error) {
        console.log(error);
    }
}

async function updatePopularVideo(popularVideo) {
    var options = {
        url: 'http://10.253.57.208:4500/popularvideos',
        method: 'POST',
        body: popularVideo,
        json: true,
        rejectUnauthorized: false,
        proxy: 'http://168.219.61.252:8080'
    };

    try {
        var result = await request(options)
    } catch (error) {
        console.log(error);
    }
}