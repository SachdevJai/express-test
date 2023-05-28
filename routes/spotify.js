const express = require('express');
const router = express.Router();
const path = require('path');
const runSample = require('../youtube');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../pages/spotify.html'));
});

router.post('/', (req, res) => {
    let link = req.body.data;
    const index = link.indexOf("playlist?list=");
    link = link.substring(index+14);
    console.log(link);
    const titles = runSample(link);
    console.log(titles);
});

module.exports = router;
