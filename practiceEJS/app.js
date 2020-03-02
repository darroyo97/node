const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(require('./routes/index'));
app.use(require('./routes/aboutus'));
app.use(require('./routes/school'));


app.listen(3004, () => {
    console.log('running gon port 3004')
})