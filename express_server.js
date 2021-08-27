const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Get Request Received');
})

app.post('/new', (req, res) => {
    res.send('Post Request Received');
})

app.put('/update', (req, res) => {
    res.send('Put Request Received');
})

app.delete('/del', (req, res) => {
    res.send('<h3>Delete Request Received</h3>');
})

app.listen(port, () => {
    console.log('listening on port ' + port);
});