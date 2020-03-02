const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(require('./routes/index'));


app.listen(3004, () => {
    console.log('running gon port 3004')
})