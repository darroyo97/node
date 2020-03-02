const express = require('express');
const router = express.Router()
router.get('/', (req, res) => {

    let food = ['al pastor', 'fajita', 'carnitas', 'chicharron', 'pollo']


    res.render('index', {
        pageTitle: 'Cooking with Mexicans',
        description: 'tacos a la chingona ',
        foodList: food
    })
})
module.exports = router;