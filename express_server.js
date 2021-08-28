const express = require('express');
const app = express();
const port = 3001;
// https://www.youtube.com/watch?v=794Q71KVw1k
app.use(express.json());  // recibiendo objetos de tipo JSON

app.get('/', (req, res) => {
    res.send('Get Request Received');
})

app.all('/user', (req, res, next) => {
    console.log("pasaste aqui primero");
    next();
})

app.get('/user', (req, res) => {
    res.json({
        userName: 'Didier',
        lastName: 'Alvarez',
    });
    console.log("Aqui terminaste");
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

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`Post Request Received ID: ${req.params.id}`);
})

app.put('/update', (req, res) => {
    res.send('Put Request Received');
})

app.delete('/del/:id', (req, res) => {
    console.log(req.params);
    res.send(`El usuario con ID: ${req.params.id} ha sido eliminado`);
})

app.get('/test1/:id/:page', function (req, res, next) {
    console.log('although this matches ' , req.params)
    next();
})
  
app.get('/test1/:id/:page', function (req, res) {
    console.log('and this matches too ', req.params)
    res.send(`Ok`);
    res.end()
})

app.listen(port, () => {
    console.log('listening on port ' + port);
});