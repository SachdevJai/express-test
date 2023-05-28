const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../pages/spotify.html'));
});

router.post('/', (req, res) => {
    const link = req.body.data;
    console.log(link);
});

module.exports = router;