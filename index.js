const http = require('http')
const port = process.env.PORT || 3000;

const handler = (req, res) => {
    console.log("Running server");
    res.end("Hello world from github!");
}

const server = http.createServer(handler);

server.listen(port, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Listening on port: ${port}`);
    }
})