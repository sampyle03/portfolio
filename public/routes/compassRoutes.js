const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/compass', (req, res) => {
    res.render(path.join(__dirname, '../views/compass'));
});

module.exports = router;