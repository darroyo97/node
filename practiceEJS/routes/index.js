const express = require('express');
const router = express.Router()
router.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Cooking with Mexicans',
        description: 'tacos a la chingona '
    })
})
module.exports = router;