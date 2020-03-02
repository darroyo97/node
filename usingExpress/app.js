const express = require('express');
const app = express();
let PORT = 3003;

app.use(require('./routes/index'));
app.use(require('./routes/aboutus'))
app.use(require('./routes/animals'))
app.use(require('./routes/cars'))
app.listen(PORT, () => {
    console.log('listening on port 3000');
})