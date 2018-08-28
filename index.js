const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send("<b>Hello</b>")
})

app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

app.use(function (req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(port, function () {
    console.log(`Listening `)
})
// const http = require('http'

// const handler = (req, res) => {
//     console.log("Running server");
//     res.end("Hello world from github!");
// }

// const server = http.createServer(handler);

// server.listen(port, err => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(`Listening on port: ${port}`);
//     }
// })