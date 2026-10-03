const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render("aboutMe");
});

router.get('/projects', (req, res) => {
    res.render("aboutMe");
});

module.exports = router;