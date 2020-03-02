const express = require('express');
const router = express.Router();
router.get('/aboutus', (req, res) => {
    res.send('this is my about us')
})
module.exports = router;

