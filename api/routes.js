const express = require('express');
const router = express.Router();
const data = require('./data/prices.json')

// Get data
router.get('/prices', async (req, res) => {
    res.send(data);
});

module.exports = router;