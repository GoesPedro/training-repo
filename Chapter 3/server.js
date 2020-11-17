const http = require('http');

// createServer method receives a callback function as argument
// the callback function tell what the server will send back when a request is made
const server = http.createServer((req, res) => {
    console.log('request arrived!!');
});

// to put the server to listen to requests:
// arguments: port #, host name and a function that fires when the listening starts
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});