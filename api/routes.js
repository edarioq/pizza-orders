const express = require('express');
const router = express.Router();
const prices = require('./data/prices.json')
const orders = require('./data/orders.json')

router.get('/prices', async (req, res) => {
    res.send(prices);
});

router.get('/orders', async (req, res) => {
    res.send(orders);
});

module.exports = router;