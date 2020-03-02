const express = require('express');
const app = express();
let PORT = 3000;
//sits in between server and my routes
app.use(require('./routes/index'));
// app.get('/', (req, res) => {
//     res.send('Home Page')
// })
app.get('/aboutUs', (req, res) => {
    res.send('about us')
})
app.get('/cars/:cars', (req, res) => {
    let cars = req.param('cars')
    res.send(`${cars} Cars`)
})
app.get('/animals', (req, res) => {
    res.send('Animals')
})
app.listen(PORT, () => {
    console.log('listening on port 3000');
})