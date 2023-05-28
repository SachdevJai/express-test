const express = require('express');
const router = express.Router();
const getPagePath = require('../handler');

router.get('/', (req, res) => {
    res.sendFile(getPagePath('home.html'));
});

module.exports = router;