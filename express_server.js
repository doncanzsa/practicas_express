const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());  // recibiendo objetos de tipo JSON

app.get('/', (req, res) => {
    res.send('Get Request Received');
})

app.get('/user', (req, res) => {
    res.json({
        userName: 'Didier',
        lastName: 'Alvarez',
    });
})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    res.json({

        userName: 'Didier',
        lastName: 'Alvarez',
    });
})

app.post('/new', (req, res) => {
    res.send('Post Request Received');
})

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('Post Request Received');
})

app.put('/update', (req, res) => {
    res.send('Put Request Received');
})

app.delete('/del/:id', (req, res) => {
    console.log(req.params);
    res.send(`El usuario con ID: ${req.params.id} ha sido eliminado`);
})

app.listen(port, () => {
    console.log('listening on port ' + port);
});