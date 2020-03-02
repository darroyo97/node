const express = require('express');
const app = express();


app.use(express.static('public'))

app.get("/", (req, res) => {
    res.send('hello you.')
})
app.get('/gatitos?(bonitos)?', (req, res) => {
    res.send('mis gatitos son muy bonitos')
})

app.get("/pictures?", (req, res) => {
    res.send('las photos de kim k')
})

app.get("/perro*", (req, res) => {
    res.send('who let the dogs out ')
})

// app.get("/contact", (req, res) => {
//     let contact = req.param('name')
//     // console.log(contact)
//     res.send(`contacto , no me toques ${contact} `)
// })

app.get("/contact", (req, res) => {
    res.send(`pon tu nombre en el fin del url ok!? ok.`)
})
app.get("/contact/:name", (req, res) => {
    let name = req.param('name')
    res.send(`tu nombre es ${name}`)
})
app.get("/add", (req, res) => {
    res.send('vamos hacer mathematicas')
})

app.get("/add/9/10", (req, res) => {
    res.send('whats 9 plus 10?  21 !')
})

app.get("/add/:num1/:num2", (req, res) => {
    let numero1 = req.param('num1')
    let numero2 = req.param('num2')
    let add = parseFloat(numero1) + parseFloat(numero2)
    res.send(`<h1 style="color:pink"> la respuesta es ${add} </h1>`)
})

app.get("/pics", (req, res) => {
    let imgVar = req.param('img');
    res.send(`<img src=${imgVar}>`)
})


app.get("*", (req, res) => {
    res.send('wtf you looking at')
})
app.listen(3002, () => {
    console.log('runnig 3001')
})