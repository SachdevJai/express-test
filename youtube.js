'use strict';

const { google } = require('googleapis');
require('dotenv').config();

// Initialize the YouTube API library
const youtube = google.youtube('v3');

// A simple example of getting data from a playlist
async function runSample(playlistId) {
  try {
    // Replace 'YOUR_PLAYLIST_ID' with the ID of the desired playlist
    const titleArray = await getPlaylistData(playlistId);
    console.log(titleArray);
    return titleArray
  } catch (err) {
    console.error('Error: ', err);
  }
}

async function getPlaylistData(playlistId) {

    let nextPageToken = null;
    const titleArray = [];

    do{
        let res = await youtube.playlistItems.list({
            part: 'contentDetails,snippet',
            key: process.env.YT_API_KEY,
            playlistId: playlistId,
            maxResults: 50,
            pageToken: nextPageToken
        });

        let videos = res.data.items;
        videos.forEach(video => {
            titleArray.push(video.snippet.title);
        })
    
        nextPageToken = res.data.nextPageToken;
    } while (nextPageToken);
    return titleArray;
}

if (module === require.main) {
  runSample().catch(console.error);
}

module.exports = runSample;