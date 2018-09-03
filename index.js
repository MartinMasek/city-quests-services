const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send("<b>Hello</b>")
    console.log("LOG")
})

app.get('/welcome', (req, res) => {
    res.send('<b>Hello</b> welcome to my http server made with ddexpress');
});

app.get('/store/get-all-adventures', (req, res) => {
    console.log("Asking for adventures...")
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control','public,max-age=20')
    res.send(JSON.stringify({
        adventures: [
            {
                id: 1,
                title: "Stop the golem!!",
                subtitle: "The ancient golem woke up and 2 people are missing",
                description: "Description description description description description description description description description description description description",
                price: 14.95,
                currency: "EUR",
                bought: true,
                active: true,
            },
            {
                id: 2,
                title: "Where is Amy?",
                subtitle: "Who is Amy? Where is she?",
                description: "Description about how Amyh got lost. It's a secret figure that. ...",
                price: 9.95,
                currency: "EUR",
                bought: false,
                active: false
            },
            {
                id: 3,
                title: "Blanic knights",
                subtitle: "Will the blanic knights help to save Czechia in its darkest hour?",
                description: "Knights Description description description description description description description description description description description description",
                price: 4.95,
                currency: "EUR",
                bought: false,
                active: false
            },
            {
                id: 4,
                title: "Kafka",
                subtitle: "Is it or not is?",
                description: "Description of crazy Kafka's world.",
                price: 6.95,
                currency: "EUR",
                bought: false,
                active: false
            }
        ]
    }))
})

app.use(function (req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(port, function () {
    console.log(`Listening on ${port}`)
})