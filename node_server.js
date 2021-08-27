const http = require('http');
const port = 3001;

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello world! Node Js");
})

server.listen(port, function () {
    console.log("Server on port: " + port);
})