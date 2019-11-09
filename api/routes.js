const express = require('express');
const router = express.Router();
const prices = require('./data/prices.json')
const orders = require('./data/orders.json')
const dashboard = require('./data/dashboard.json')

router.get('/prices', async (req, res) => {
    res.send(prices);
});

router.get('/orders', async (req, res) => {
    res.send(orders);
});

router.get('/dashboard', async (req, res) => {
    res.send(dashboard);
});

module.exports = router;