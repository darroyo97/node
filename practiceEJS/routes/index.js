const express = require('express');
const router = express.Router()
router.get('/', (req, res) => {
    // res.send('index page')
    res.render('index.ejs')
})
module.exports = router;