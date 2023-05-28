const express = require('express');
const router = express.Router();
const getPagePath = require('../handler');

router.get('/', (req, res) => {
    res.sendFile(getPagePath('index.html'));
});

module.exports = router;