const express = require('express');
const router = express.Router()
router.get('/school', (req, res) => {
    res.render('school.ejs')
})
module.exports = router;