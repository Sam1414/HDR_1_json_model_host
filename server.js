const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3001;
const server = http.createServer(app);

// app.use(express.static("../static"));

server.listen(port, function () {
    console.log("serving static on " + port);
});