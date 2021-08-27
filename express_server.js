const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Welcome 123');
})

app.listen(port, () => {
    console.log('listening on port ' + port);
});