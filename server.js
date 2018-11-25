const http = require('http');
const app = require('./src/app');

const port = process.env.PORT || 3000;

// Set the port within express
app.set('port', port);

// Pass express into the serve allowing the middleware to be heard
const server = http.createServer(app);

server.listen(port);