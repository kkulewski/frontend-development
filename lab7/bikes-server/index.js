var BikeRepository = require('../bikes-server/services/bike-repository.js')

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
app.use(bodyParser.json());

var bikeRepository = new BikeRepository();

app.get('/', (req, res) => res.send('Bike-Server listening...'));
app.get('/api', (req, res) => res.send('Bike-Server listening...'));

app.get('/api/bike', (req, res) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(bikeRepository.getAll(), null, 4));
});

app.post('/api/bike', (req, res) => {
    const bike = req.body;
    bikeRepository.add(bike);
    res.send({"message":"bike added"});
})

app.listen(port, () => console.log("Bike-Server listening on port " + port));
